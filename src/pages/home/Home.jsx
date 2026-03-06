/**
 * Home Page - Drake Interplanetary
 *
 * Design Philosophy: Industrial Salvage Brutalism
 * - Hero section with industrial imagery
 * - Array of ship objects displayed as cards
 * - Responsive grid layout
 * - Industrial aesthetic throughout
 */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ShipCard from "../../components/ship-card/ShipCard";
import drakeHeroImg from "../../assets/images/drake-hero.webp";
import drakeInteriorImg from "../../assets/images/drake-interior.webp";
import cutlassImg from "../../assets/images/cutlass.webp";
import dragonflyImg from "../../assets/images/dragonfly.webp";
import heraldImg from "../../assets/images/herald.webp";
import vultureImg from "../../assets/images/vulture.webp";
import buccaneerImg from "../../assets/images/buccaneer.webp";
import corsairImg from "../../assets/images/corsair.webp";
import statsData from "../../data/stats.json";
import { db } from "../../firebase";
import { collection, getDocs, setDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import "./Home.css";

const imageMap = {
  "drake-hero.webp": drakeHeroImg,
  "drake-interior.webp": drakeInteriorImg,
  "cutlass.webp": cutlassImg,
  "dragonfly.webp": dragonflyImg,
  "herald.webp": heraldImg,
  "vulture.webp": vultureImg,
  "buccaneer.webp": buccaneerImg,
  "corsair.webp": corsairImg,
};

const emptyForm = {
  name: "",
  designation: "",
  description: "",
  status: "operational",
  specs: { crew: "", cargo: "", range: "" },
  features: "",
};

export default function Home() {
  const { t } = useTranslation();
  const [ships, setShips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchShips = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "ships"));
      const data = querySnapshot.docs.map((d) => {
        const shipData = d.data();
        return {
          docId: d.id,
          ...shipData,
          image: shipData.imageBase64 || shipData.imageUrl || imageMap[shipData.imageKey] || drakeHeroImg,
        };
      });
      setShips(data);
    } catch (error) {
      console.error("Error fetching ships:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShips();
  }, []);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview(null);
    setIsModalOpen(true);
  };

  const openEdit = (ship) => {
    setEditingId(ship.docId);
    setForm({
      name: ship.name,
      designation: ship.designation,
      description: ship.description,
      status: ship.status,
      specs: { crew: ship.specs.crew, cargo: ship.specs.cargo, range: ship.specs.range },
      features: Array.isArray(ship.features) ? ship.features.join(", ") : ship.features,
    });
    setImageFile(null);
    setImagePreview(ship.imageBase64 || ship.imageUrl || imageMap[ship.imageKey] || null);
    setIsModalOpen(true);
  };

  const handleDelete = async (docId) => {
    if (!window.confirm(t('fleet.confirmDelete'))) return;
    try {
      await deleteDoc(doc(db, "ships", docId));
      setShips((prev) => prev.filter((s) => s.docId !== docId));
    } catch (error) {
      console.error("Error deleting ship:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      let imageBase64 = null;
      if (imageFile) {
        imageBase64 = await toBase64(imageFile);
      }

      const payload = {
        name: form.name,
        designation: form.designation,
        description: form.description,
        status: form.status,
        specs: form.specs,
        features: form.features.split(",").map((f) => f.trim()).filter(Boolean),
        ...(imageBase64 && { imageBase64 }),
      };

      if (editingId) {
        await updateDoc(doc(db, "ships", editingId), payload);
      } else {
        const docId = form.name.toLowerCase().replace(/\s+/g, "-");
        await setDoc(doc(db, "ships", docId), { ...payload, id: docId });
      }
      setIsModalOpen(false);
      fetchShips();
    } catch (error) {
      console.error("Error saving ship:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name in form.specs) {
      setForm((prev) => ({ ...prev, specs: { ...prev.specs, [name]: value } }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t('home.title')}</h1>
          <p className="hero-subtitle">{t('home.subtitle')}</p>
          <p className="hero-description">{t('home.description')}</p>
          <div className="hero-cta">
            <button className="cta-button">{t('home.exploreFleet')}</button>
            <button className="cta-button secondary">{t('home.contactSales')}</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={drakeHeroImg} alt="Drake Interplanetary" />
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet-section">
        <div className="fleet-header">
          <h2 className="section-title">{t('home.ourFleet')}</h2>
          <p className="section-subtitle">{t('home.fleetSubtitle')}</p>
          <button className="cta-button fleet-add-btn" onClick={openCreate}>
            + {t('fleet.addShip')}
          </button>
        </div>

        {isLoading ? (
          <p className="fleet-loading">{t('careers.loading')}</p>
        ) : (
          <div className="fleet-grid">
            {ships.map((ship) => (
              <ShipCard
                key={ship.docId}
                {...ship}
                onEdit={() => openEdit(ship)}
                onDelete={() => handleDelete(ship.docId)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* CRUD Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {editingId ? t('fleet.editShip') : t('fleet.addShip')}
              </h2>
              <button type="button" className="modal-close" onClick={() => setIsModalOpen(false)}>✕</button>
            </div>
            <form onSubmit={handleSubmit} className="ship-form">
              <div className="form-row">
                <label>{t('fleet.form.name')}
                  <input name="name" value={form.name} onChange={handleFormChange} required />
                </label>
                <label>{t('fleet.form.designation')}
                  <select name="designation" value={form.designation} onChange={handleFormChange} required>
                    <option value="">{t('fleet.form.selectPlaceholder')}</option>
                    <option value="Light Fighter">{t('fleet.designations.lightFighter')}</option>
                    <option value="Medium Fighter/Cargo">{t('fleet.designations.mediumFighterCargo')}</option>
                    <option value="Heavy Fighter">{t('fleet.designations.heavyFighter')}</option>
                    <option value="Heavy Cargo">{t('fleet.designations.heavyCargo')}</option>
                    <option value="Data Runner">{t('fleet.designations.dataRunner')}</option>
                    <option value="Ground Vehicle">{t('fleet.designations.groundVehicle')}</option>
                    <option value="Salvage Specialist">{t('fleet.designations.salvageSpecialist')}</option>
                    <option value="Exploration">{t('fleet.designations.exploration')}</option>
                    <option value="Multi-Role">{t('fleet.designations.multiRole')}</option>
                  </select>
                </label>
              </div>
              <label>{t('fleet.form.description')}
                <textarea name="description" value={form.description} onChange={handleFormChange} required />
              </label>
              <div className="form-row">
                <label>{t('fleet.form.image')}
                  <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
                  {imagePreview && (
                    <img src={imagePreview} alt="preview" className="image-preview" />
                  )}
                </label>
                <label>{t('fleet.form.status')}
                  <select name="status" value={form.status} onChange={handleFormChange}>
                    <option value="operational">{t('fleet.statuses.operational')}</option>
                    <option value="development">{t('fleet.statuses.development')}</option>
                    <option value="legacy">{t('fleet.statuses.legacy')}</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>{t('ship.crew')}
                  <input name="crew" value={form.specs.crew} onChange={handleFormChange} required />
                </label>
                <label>{t('ship.cargo')}
                  <input name="cargo" value={form.specs.cargo} onChange={handleFormChange} required />
                </label>
                <label>{t('ship.range')}
                  <input name="range" value={form.specs.range} onChange={handleFormChange} required />
                </label>
              </div>
              <label>{t('fleet.form.features')}
                <textarea name="features" value={form.features} onChange={handleFormChange} placeholder={t('fleet.form.featuresPlaceholder')} />
              </label>
              <div className="form-actions">
                <button type="button" className="cta-button secondary" onClick={() => setIsModalOpen(false)}>
                  {t('fleet.cancel')}
                </button>
                <button type="submit" className="cta-button" disabled={isUploading}>
                  {isUploading ? '...' : (editingId ? t('fleet.save') : t('fleet.create'))}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
