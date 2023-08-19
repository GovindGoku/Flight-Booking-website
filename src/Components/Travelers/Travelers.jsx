import USA from '../../assets/USA.jpg'
import london from '../../assets/london.jpg'
import bangkok from '../../assets/bangkok.jpg'
import pakistan from '../../assets/pak.jpg'
import traveler1 from '../../assets/user1.jpg'
import traveler2 from '../../assets/user2.png'
import traveler3 from '../../assets/user3.png'
import traveler4 from '../../assets/user4.png'


const travelers = [
  {
    id: 1,
    destinationImage: USA,
    travelerImage: traveler1,
    travelerName: 'Kevin Joseph',
    socialLink: '@kevin76'
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: 'Harold Xaviour',
    socialLink: '@haider32'
  },
  {
    id: 3,
    destinationImage: bangkok,
    travelerImage: traveler3,
    travelerName: 'Alex Russo',
    socialLink: '@alex46'
  },
  {
    id: 4,
    destinationImage: pakistan,
    travelerImage: traveler4,
    travelerName: 'Justin Sky',
    socialLink: '@justin990'
  }
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this Month!</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers
