/**
 * Specifications Page - Drake Interplanetary
 * 
 * Design Philosophy: Industrial Salvage Brutalism
 * - Technical specifications in table format
 * - Industrial styling with metal plates
 * - Detailed comparison of Drake vessels
 */

import { useTranslation } from "react-i18next";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import shipsData from "../../data/ships.json";
import "./Specifications.css";

export default function Specifications() {
  const { t } = useTranslation();
  
  // Build specifications array from ships data
  const specifications = [
    {
      category: t('specs.categories.crew'),
      cutlass: shipsData[0].specs.crew,
      dragonfly: shipsData[1].specs.crew,
      herald: shipsData[2].specs.crew,
      buccaneer: shipsData[3].specs.crew,
      corsair: shipsData[4].specs.crew,
      vulture: shipsData[5].specs.crew,
    },
    {
      category: t('specs.categories.cargo'),
      cutlass: shipsData[0].specs.cargo,
      dragonfly: shipsData[1].specs.cargo,
      herald: shipsData[2].specs.cargo,
      buccaneer: shipsData[3].specs.cargo,
      corsair: shipsData[4].specs.cargo,
      vulture: shipsData[5].specs.cargo,
    },
    {
      category: t('specs.categories.speed'),
      cutlass: shipsData[0].specs.speed,
      dragonfly: shipsData[1].specs.speed,
      herald: shipsData[2].specs.speed,
      buccaneer: shipsData[3].specs.speed,
      corsair: shipsData[4].specs.speed,
      vulture: shipsData[5].specs.speed,
    },
    {
      category: t('specs.categories.range'),
      cutlass: shipsData[0].specs.range,
      dragonfly: shipsData[1].specs.range,
      herald: shipsData[2].specs.range,
      buccaneer: shipsData[3].specs.range,
      corsair: shipsData[4].specs.range,
      vulture: shipsData[5].specs.range,
    },
    {
      category: t('specs.categories.weapons'),
      cutlass: t(`specs.values.${shipsData[0].specs.weapons}`),
      dragonfly: t(`specs.values.${shipsData[1].specs.weapons}`),
      herald: t(`specs.values.${shipsData[2].specs.weapons}`),
      buccaneer: t(`specs.values.${shipsData[3].specs.weapons}`),
      corsair: t(`specs.values.${shipsData[4].specs.weapons}`),
      vulture: t(`specs.values.${shipsData[5].specs.weapons}`),
    },
    {
      category: t('specs.categories.hull'),
      cutlass: t(`specs.values.${shipsData[0].specs.hull}`),
      dragonfly: t(`specs.values.${shipsData[1].specs.hull}`),
      herald: t(`specs.values.${shipsData[2].specs.hull}`),
      buccaneer: t(`specs.values.${shipsData[3].specs.hull}`),
      corsair: t(`specs.values.${shipsData[4].specs.hull}`),
      vulture: t(`specs.values.${shipsData[5].specs.hull}`),
    },
    {
      category: t('specs.categories.fuel'),
      cutlass: shipsData[0].specs.fuel,
      dragonfly: shipsData[1].specs.fuel,
      herald: shipsData[2].specs.fuel,
      buccaneer: shipsData[3].specs.fuel,
      corsair: shipsData[4].specs.fuel,
      vulture: shipsData[5].specs.fuel,
    },
    {
      category: t('specs.categories.price'),
      cutlass: shipsData[0].specs.price,
      dragonfly: shipsData[1].specs.price,
      herald: shipsData[2].specs.price,
      buccaneer: shipsData[3].specs.price,
      corsair: shipsData[4].specs.price,
      vulture: shipsData[5].specs.price,
    },
  ];
  
  return (
    <div className="specifications-page">
      <Header />

      <main className="specs-main">
        {/* Page Header */}
        <section className="specs-header">
          <h1 className="specs-title">{t('specs.title')}</h1>
          <p className="specs-subtitle">
            {t('specs.subtitle')}
          </p>
        </section>

        {/* Specifications Table */}
        <section className="specs-table-section">
          <div className="table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>{t('specs.specification')}</th>
                  <th>{t('specs.cutlass')}</th>
                  <th>{t('specs.dragonfly')}</th>
                  <th>{t('specs.herald')}</th>
                  <th>{t('specs.buccaneer')}</th>
                  <th>{t('specs.corsair')}</th>
                  <th>{t('specs.vulture')}</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                    <td className="spec-category">{spec.category}</td>
                    <td>{spec.cutlass}</td>
                    <td>{spec.dragonfly}</td>
                    <td>{spec.herald}</td>
                    <td>{spec.buccaneer}</td>
                    <td>{spec.corsair}</td>
                    <td>{spec.vulture}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Specifications Info */}
        <section className="specs-info">
          <div className="info-box">
            <h3 className="info-title">{t('specs.performanceTitle')}</h3>
            <p className="info-text">
              {t('specs.performanceText')}
            </p>
          </div>

          <div className="info-box">
            <h3 className="info-title">{t('specs.warrantyTitle')}</h3>
            <p className="info-text">
              {t('specs.warrantyText')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
