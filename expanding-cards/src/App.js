import './App.css';
import {motion} from 'framer-motion';
import {useState} from 'react';
import ellie from '../src/images/ellie.PNG'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div  
      transition={{layout: {duration: 1, type: "spring" }}} 
      layout onClick={() => setIsOpen(!isOpen)} 
      className='card'
      style={{
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)"
      }}
      >
        <motion.h2 layout="position">Ellie</motion.h2>
        {isOpen && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='expand'
          >
              <img src={ellie} className="petPic"/>
            <div>
              <p>Age: 5 years old</p>
              <p>Breed: 1/4 Newfoundlad, 1/4 St.Bernard, 1/4 Great Pyreneese, and 1/4 Greater Swiss Mountain Dog</p>
              <p>Personality: Smelly Ellie is the first animal my partner and I added to our family. She will always have a specail place in our hearts. Thant being said- shes stinky! Shes goofy and very playful but is also VERY shy.</p>
              <p>Favorites:
                <br/>
              Favorite Toy: Her Hedgehog
              <br/>
              Favorite Treats: Chicken Nugget- if chicken nuggets arent available she likes any meat flavored treats
              <br/>
              Favorite Spot: Anywhere that is in the way
              </p>
              <p>Health: Ellie gets an upset stomach very easily which can lead her to throwing up. She also has a limp especially when first getting up- it goes away after moving a bit.</p>
            </div>
          </motion.div>
        )}
      </motion.div>
      
    </div>
  );
}

export default App;
