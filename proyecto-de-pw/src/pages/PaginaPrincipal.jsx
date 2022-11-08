import React from "react"
import '../estilos/PaginaPrincipal.css'

const  PaginaPrincipal = () => {
    return (
        
            <div>
              <section id="hero">
                <h1>Build your PC! <br />Just for what you need! </h1>
                <section id="hero2">
                  <a href="/armadoPrincipiantes.html">
                    <button className="index_button">Build for begginers</button>
                  </a>
                  <a href="/Build Begginers/INTERFACES/Advanced.html"><button className="index_button">Advanced building</button></a>
                </section>
              </section>
              <section id="Signup">
                <div className="container_index">
                  <div className="img-container" />
                  <div className="texto"><h2>Sign up to our newsletter <span className="color-acento">for the lastest PC news</span> </h2>
                    <p>Buy PC parts to build your own computer or upgrade your current system. Whether you need a CPU, GPU, or motherboard, Micro Center is your trusted source for computer parts and accessories to take your build to the next level. </p></div>
                </div>
              </section>
              <section id="nuestrosProductos">
                <div className="container_index">
                  <h2>Our Products</h2>
                  <div className="productos">
                    <div className="carta">
                      <h3>Gaming Graphics Cards</h3>
                      <p>The best graphics cards are the beating heart of any gaming PC, and everything else comes second. Without a powerful GPU pushing pixels, even the fastest CPU won't manage much. While no one graphics card will be right for everyone, we'll provide options for every budget and mindset below. Whether you're after the fastest graphics card, the best value, or the best card at a given price, we've got you covered.
                        Where our GPU benchmarks hierarchy ranks all of the cards based purely on performance, our list of the best graphics cards looks at the whole package. Price, availability, performance, features, and efficiency are all important, though the weighting becomes more subjective.</p>
                      <button className="index_button">+ Info</button>
                    </div>
                    <div className="carta">
                      <h3>RAM Memory</h3>
                      <p>RAM stands for random access memory, and it’s one of the most fundamental elements of computing. RAM is a temporary memory bank where your computer stores data it needs to retrieve quickly. RAM keeps data easily accessible so your processor can quickly find it without having to go into long-term storage to complete immediate processing tasks.
                        Every computing device has RAM, whether it’s a desktop computer (running Windows, MacOS, or Linux), a tablet or smartphone (running Android or iOS), or even an IoT computing device (like a smart TV). Nearly all computers have a way of storing information for longer-term access, too. But the memory needed to run the process you’re currently working on is stored and accessed in your computer’s RAM.</p>
                      <button className="index_button">+ Info</button>
                    </div>
                    <div className="carta">
                      <h3>CPU</h3>
                      <p>Our tips and picks below will show you the best CPU for gaming. Of course, when shopping for the best CPU for gaming, you'll want to balance performance and features with your PC budget. You can also see how all of these processors stack up in our CPU Benchmarks hierarchy, including CPU overclock benchmarks. But for detailed help on picking the best processor for your gaming rig, you can check out our 2022 CPU Buying Guide. And if you're on the fence about which CPU company to go with, our AMD vs. Intel article dives deep into the topic and comes up with a winner.
                        If you're planning a new system now, be aware that AMD's hotly-anticipated Zen 4 Ryzen 7000 arrives on September 26, while Intel's 13th-Gen Raptor Lake retort arrives in October. </p>
                      <button className="index_button">+ Info</button>     
                    </div>
                    <div className="carta">
                      <h3>Gaming Peripherals</h3>
                      <p>Gaming peripherals are more abundant than ever today, and the sheer amount of options can be confusing to even the most seasoned gamer. Which headset is best? Should you play with keyboard and mouse or controller? What kind of monitor will best display the games you play?
                        A good place to start when it comes to gaming peripherals is acquiring a solid mechanical gaming keyboard, as opposed to a more standard “membrane” keyboard. Membrane keyboards do not separate out their keys into distinct moving parts, which often precludes them from having the punchy “typewriter” feel that makes mechanical keyboards so tactile and responsive. While membrane keyboards may be fine for everyday typing, in high-stakes gaming situations this can make them both more error-prone and less comfortable.
                      </p>
                      <button className="index_button">+ Info</button>     
                    </div>
                  </div>
                </div>
              </section>
              <section id="caracteristicas">
                <div className="container_index">
                  <div  className="garantia" >

                  </div>
                  <div className="img-container">
                    <div className="texto2">
                      <ul>
                        <li>✔️ 100% online</li>
                        <li>✔️ Low prices</li>
                        <li>✔️ 24/7 Support</li>
                        <li>✔️ Financial Assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        }
      
export default PaginaPrincipal
