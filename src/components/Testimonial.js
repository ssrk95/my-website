import testimonialByMatheu from '../images/testimonial_matheu.png';
import ReactGA from 'react-ga4'

function Testimonial(){

    const handleTestimonialClick = e => {
        ReactGA.event({
            category: 'Interaction',    
            action: 'Resume Section Click',      
            label: "Testimonial Image"          
          });
        window.open("https://www.linkedin.com/in/ssrk95/", '_blank')
    }

    return(
        <div className='testimonialCont' onClick={handleTestimonialClick}>
            <img src={testimonialByMatheu} alt="matheu testimonial"/>
        </div>
    )
}

export default Testimonial