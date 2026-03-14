import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

const products = [
  {
    id: 1,
    name: "Crema Hidratante Premium",
    description: "Hidratación profunda 24h con ácido hialurónico",
    price: "$670",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Sérum Vitaminado C",
    description: "Potente antioxidante para luminosidad inmediata",
    price: "$520",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Mascarilla Reparadora",
    description: "Nutrición intensiva para piel radiante",
    price: "$400",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Oil Limpiador",
    description: "Limpieza suave que no altera la barrera cutánea",
    price: "$600",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop"
  }
]

const benefits = [
  { icon: "🌿", title: "Natural", desc: "Ingredientes 100% naturales" },
  { icon: "🐰", title:"Cruelty Free", desc:"No testado en animales" },
  { icon: "♻️", title:"Eco-Friendly", desc:"Envases reciclables" },
  { icon: "✨", title:" Dermatológicamente Testado", desc:"Seguro para tu piel" }
]

function App() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">Mi Primera Chamba</div>
          <button className="btn-contact">Contáctanos</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Belleza Natural para tu Piel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubre nuestra línea premium de productos diseñados para revelar 
            tu belleza natural. Ingredientes seleccionados, resultados visibles.
          </motion.p>
          <motion.button 
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Productos
          </motion.button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop" alt="Beauty products" />
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="products">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Nuestros Productos
        </motion.h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <span>Ver detalles</span>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="price">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>¿Lista para transformar tu rutina de skincare?</h2>
          <p>Contáctanos y te asesoramos personalmente</p>
          <button className="btn-primary">WhatsApp</button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Mi Primera Chamba</h3>
            <p>Tu belleza, nuestra pasión</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces</h4>
            <a href="#">Productos</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
          </div>
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <span>📷</span>
              <span>📘</span>
              <span>🎵</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Mi Primera Chamba. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App