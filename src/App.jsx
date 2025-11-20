import { useState } from 'react'
import './App.css'

// SVG Icons components
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
)

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
)

const KeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
)

// Nuevo componente de notificación (la información de la imagen adjunta)
const NoveltyNotification = ({ onClose }) => (
    <div className="novelty-notification-overlay" onClick={onClose}>
        <div className="novelty-notification" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>&times;</button>
            <div className="notification-content">
                <header className="notification-header">
                    <button className="menu-btn" onClick={onClose}>Ir a Menú</button>
                    <h2 className="title">Novedades</h2>
                </header>
                <div className="product-detail-container">
                    <h3 className="product-title">Llavero de Aki Chainsaw Man ($20)</h3>
                    <h3 className="section-subtitle-right">Datos Interesantes</h3>
                    <div className="detail-body">
                        <div className="image-info">
                            <img 
                                src="https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9a07d555/images/funko/upload/83633_CSM_S2_Aki_POCKET_POP_KEYCHAIN_GLAM-WEB.png?sw=800&sh=800" 
                                alt="Llavero de Aki Chainsaw Man" 
                                className="product-image-large" 
                            />
                        </div>
                        <div className="text-info">
                            <ul>
                                <li>
                                    <strong>Estilo Chibi:</strong> La figura usa un diseño estilizado y miniatura, transformando al serio **Aki** en un formato adorable pero manteniendo su rasgo clave: la katana.
                                </li>
                                <li>
                                    <strong>Parte de una Colección:</strong> Aki es solo uno de los **8 personajes** que los fans debían coleccionar para completar la serie de Chainsaw Man Mystery Hangers.
                                </li>
                            </ul>
                        </div>
                        <div className="side-info">
                            <ul>
                                <li>
                                    <strong>Formato Sorpresa:</strong> Se vendía en una **Bolsa Misteriosa** (Blind Bag), lo que significa que era un artículo de suerte y coleccionismo.
                                </li>
                                <li>
                                    <strong>Doble Función:</strong> Es un "**Hanger**" (colgador), diseñado para ser usado tanto como llavero como para colgar en mochilas o bolsos gracias a su gancho superior.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Imágenes de fondo decorativas (opcional, basado en la imagen original) */}
                <div className="decorative-images-container">
                    {/* Placeholder para la primera imagen decorativa (Aki oscuro) */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeNwrc-BBCDpSgMNhSH0Hodp2isJixltsEg&s" alt="Ilustración oscura de Aki" className="decorative-img left" />
                    {/* Placeholder para la segunda imagen decorativa (Aki azul) */}
                    <img src="https://a-static.besthdwallpaper.com/aki-hayakawa-art-from-chainsaw-man-anime-wallpaper-3840x2160-106044_54.jpg" alt="Ilustración azul de Aki" className="decorative-img right" />
                </div>
            </div>
        </div>
    </div>
);


// Mock Data
const PRODUCTS = [
  {
    id: 1,
    name: "Llavero #1",
    price: 200.00,
    image: "https://www.pro-bems.com/IMAGES/images_1/FIGFUN86532/m/FIGFUN86532_3.png", // Placeholder
    type: "heart"
  },
  {
    id: 2,
    name: "Llavero #2",
    price: 200.00,
    image: "https://media.gamestop.com/i/gamestop/20014861/Funko-Pocket-Pop-Demon-Slayer-Kimetsu-no-Yaiba-Muichiro-Tokito-Attack-4-in-Vinyl-Keychain", // Placeholder
    type: "badge"
  },
  {
    id: 3,
    name: "Llavero #3",
    price: 200.00,
    image: "https://www.distritomax.com/cdn/shop/files/Pop_KeychainSuperSaiyan4Goku_hi-res_700x700.png?v=1750867938", // Placeholder
    type: "rect"
  }
]

const NOVELTIES = [
  {
    id: 1,
    name: "Llavero de Aki - Chainsaw Man",
    price: 20,
    description: "¡La lucha contra los demonios ha llegado a tu colección! Presentamos los increíbles Chainsaw Man Mystery Hangers, la serie de llaveros que desatará el caos.",
    image: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw9a07d555/images/funko/upload/83633_CSM_S2_Aki_POCKET_POP_KEYCHAIN_GLAM-WEB.png?sw=800&sh=800"
  },
  {
    id: 2,
    name: "Llavero Luciérnagas - The Last of Us",
    price: 30,
    description: "Inspirado en la estética industrial y sombría del juego, este llavero cuenta con un diseño de moneda o ficha metálica oscura, grabado con el logotipo icónico.",
    image: "https://storage.googleapis.com/sm-artworks/602d4cff-6c0b-4a4f-a5c5-11c5d1270fa4/proof.png?cacheFor=d6b6ecaaca00803674eadf495e3d94ee"
  },
  {
    id: 3,
    name: "Llavero The Marker - Dead Space",
    price: 15,
    description: "¡La Convergencia ha comenzado! Si has sobrevivido a los Necromorfos, es hora de llevar un pedazo del universo Dead Space a tu colección.",
    image: "https://mroboto.com.mx/cdn/shop/files/hitoshi1.png?v=1695850150&width=533"
  }
]

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  // 1. Nuevo estado para la notificación de la novedad
  const [showNoveltyNotification, setShowNoveltyNotification] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }])
    setIsCartOpen(true)
  }

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)
  
  // 2. Función para manejar el clic en "Ver Más" del primer producto de Novedades
  const handleShowNoveltyDetails = (e, noveltyId) => {
    e.preventDefault(); // Previene la navegación del enlace (aunque ahora es un botón)

    // Solo mostramos la notificación del primer producto (id: 1)
    if (noveltyId === 1) {
        setShowNoveltyNotification(true);
    } else {
        // En un caso real, aquí podrías navegar a la página de detalle
        console.log(`Ver detalle del producto ${noveltyId}`);
    }
  }


  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <KeyIcon />
          <span>LLAVEROAZUL</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#" className="active">Inicio</a></li>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <button className="icon-btn">
            <SearchIcon />
          </button>
          <button className="icon-btn" onClick={() => setIsCartOpen(true)}>
            <CartIcon />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </button>
        </div>
      </header>

      <main className="page-body">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-tags">
                <span className="hero-tag">Colección premium</span>
                <span className="hero-tag accent">Ediciones limitadas</span>
              </div>
              <h1>Tu Llave al Estilo Único</h1>
              <p>Descubre nuestra colección exclusiva de llaveros diseñados para expresar tu personalidad. Desde clásicos elegantes hasta diseños pop culture.</p>
              <div className="hero-actions">
                <button className="cta-button">Explorar colección</button>
                <button className="secondary-btn">Ver catálogo mayorista</button>
              </div>
              <ul className="hero-stats">
                <li>
                  <strong>+150</strong>
                  <span>Modelos activos</span>
                </li>
                <li>
                  <strong>48h</strong>
                  <span>Envíos nacionales</span>
                </li>
                <li>
                  <strong>4.9/5</strong>
                  <span>Valoración clientes</span>
                </li>
              </ul>
            </div>
            <div className="hero-image">
              <div className="hero-image-card">
                <img src="https://ae-pic-a1.aliexpress-media.com/kf/Sd26bbdf56cb54e16b21d3a9e0be3266dz.png" alt="Colección de llaveros" />
                <div className="hero-image-chip">
                  <span>Envío gratis desde $50</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured section-shell">
          <div className="section-header">
            <p className="section-kicker">Catálogo curado</p>
            <h2 className="section-title">Productos Destacados</h2>
            <p className="section-subtitle">Modelos listos para entregar con acabados premium y materiales resistentes.</p>
          </div>
          <div className="products-grid">
          {PRODUCTS.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <span className="top-badge">Top Ventas</span>
                {product.image ? (
                  <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                ) : (
                  <>
                    {product.type === 'heart' && (
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="#ddd" stroke="#999" strokeWidth="1">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    )}
                    {product.type === 'badge' && (
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="#ddd" stroke="#999" strokeWidth="1">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    )}
                    {product.type === 'rect' && (
                        <svg width="80" height="120" viewBox="0 0 24 24" fill="#ddd" stroke="#999" strokeWidth="1">
                          <rect x="5" y="5" width="14" height="14" rx="2" ry="2"></rect>
                          <line x1="12" y1="2" x2="12" y2="5"></line>
                          <circle cx="12" cy="2" r="1"></circle>
                        </svg>
                    )}
                  </>
                )}
              </div>
              <div className="product-info">
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <span className="product-price">{product.price.toFixed(2)} $</span>
                </div>
                <button className="add-btn" onClick={() => addToCart(product)}>
                  <PlusIcon />
                </button>
              </div>
            </div>
          ))}
          </div>
        </section>
{/* Novelties Section */}
        <section className="novelties section-shell" id="novedades">
          <div className="section-header">
            <p className="section-kicker">Ediciones frescas</p>
            <h2 className="section-title">Novedades</h2>
            <p className="section-subtitle">Explora lanzamientos pensados para coleccionistas y fans de las sagas más populares.</p>
          </div>
        
          <div className="novelties-grid">
          {NOVELTIES.map(item => (
            <div key={item.id} className="novelty-card">
              <div className="novelty-image-container">
                <img src={item.image} alt={item.name} className="novelty-image" />
              </div>
              <div className="novelty-content">
                <h3>{item.name} (${item.price})</h3>
                <p>{item.description}</p>
                {/* 3. Cambio de <a> a <button> y manejo de la función */}
                <button 
                  className="novelty-btn"
                  onClick={(e) => handleShowNoveltyDetails(e, item.id)}
                >
                  Ver Más
                </button>
              </div>
            </div>
          ))}
          </div>
        </section>
    

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={(e) => {
          // CORRECCIÓN 2: Asegurar que el clic es en el overlay y no en el sidebar
          if (e.target.classList.contains('cart-overlay')) setIsCartOpen(false)
        }}>
          <div className="cart-sidebar">
            <div className="cart-header">
              <div className="cart-header-text">
                <h2>Tu Carrito</h2>
                <p>Gestiona tus llaveros antes de pagar</p>
              </div>
              <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button> {/* Usamos &times; para la X */}
            </div>
            <div className="cart-highlight">
              <span>{cart.length} {cart.length === 1 ? 'artículo' : 'artículos'}</span>
              <span>Envío prioritario 48h</span>
            </div>
            <div className="cart-perks">
              <div>
                <strong>Devolución fácil</strong>
                <span>14 días para cambios</span>
              </div>
              <div>
                <strong>Atención personalizada</strong>
                <span>Soporte por WhatsApp</span>
              </div>
            </div>
            
            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <div className="cart-empty-icon">
                    <KeyIcon />
                  </div>
                  <h4>Aún no tienes llaveros</h4>
                  <p>Explora el catálogo y agrega tus favoritos para continuar con el pago.</p>
                  <button className="cart-empty-btn" onClick={() => setIsCartOpen(false)}>Ver catálogo</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.cartId} className="cart-item">
                    <div className="cart-item-img">
                        {/* Mini SVG for cart item */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#ddd" stroke="#999" strokeWidth="1">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <span className="cart-item-price">{item.price.toFixed(2)} $</span>
                      <button className="remove-btn" onClick={() => removeFromCart(item.cartId)}>
                        <TrashIcon /> Eliminar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>{total.toFixed(2)}$</span>
              </div>
              <button className="checkout-btn">Finalizar Compra</button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Implementación de la notificación modal */}
      {showNoveltyNotification && (
          <NoveltyNotification onClose={() => setShowNoveltyNotification(false)} />
      )}
      </main> {/* CORRECCIÓN 3: Cierre de la etiqueta <main> */}
    </div>
  )
}
export default App