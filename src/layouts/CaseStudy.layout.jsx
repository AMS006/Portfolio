import React from 'react'
import CaseStudyNavbar from '../components/CaseStudyNavbar'
import Footer from '../components/Footer'

const CaseStudyLayout = (Component) => ({...props}) =>{
    return(
        <div>
            <CaseStudyNavbar />
            <Component {...props} />
            <Footer />
        </div>
    )
}
export default CaseStudyLayout