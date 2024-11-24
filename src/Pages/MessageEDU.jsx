import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';

const MessageEDU = () => {
  return (
    <>
    <Navbar/>
    <br /><br />
    <div className="container">
    <h2 className='text-center' style={{color:'#05472A', textTransform: 'uppercase'}}>
  <b>Quaid-e-Azam Muhammad Ali Jinnah <br /> Message On Reorientation Of Education</b>
</h2>
        <br />
        <h5  className='text-center' style={{color:' #05472A'}}><u><b>(An Extract from message to All Pakistan Educational Conference, Karachi, November 27, 1947)</b></u></h5>
        <div className="row">
            <div className="col-md-4"><br /><br />
                <img width='100%'  src=".\src\assets\img\M2.jpg" alt="" />
            </div>
            <div className="col-md-8"><br /><br />
                <p>"..if we are to make any real, speedy and substantial progress, we must earnestly tackle this question and bring our educational policy and programme on the lines suited to the genius of our people, consonant with our history and culture, and having regard to the modern conditions and vast developments that have taken place 
                    all over the world. <br /> <br />There is no doubt that the future of our State will and must greatly depend upon the type of 
                    education and the way in which we bring up our children as the future servants of Pakistan. <br /><br />Education does not merely mean
                     academic education, and even that appears to be of a very poor type. What we have to do is to mobilize our people and build up the character 
                     of our future generations.</p>
                     <p>There is immediate and urgent need for training our people in the scientific and technical education in order to build up future economic life, and we should see that our people undertake scientific commerce, trade and particularly, well-planned industries.
                     <br /><br />But do not forget that we have to compete with the world, which is moving very fast in this direction. <br /><br />Also I must emphasize that greater attention should be paid to technical and vocational education. <br /><br />In short, we have to build up the character of our future generations which means highest sense of honour, integrity, selfless service to the nation, and sense of responsibility, and we have to see that they are fully qualified or equipped to play their part in the various branches of economic life in a manner which will do honour to Pakistan."   </p>

            </div>
        </div>
        <br />
    </div>
  <br /><br />
  <Footer/>
    </>
  )
}

export default MessageEDU
