import React from 'react'
import Card from './Card';
import web1 from './i5.jpg'
import web2 from './i6.jpg'
import web3 from './i7.jpg'
import web4 from './i8.jpg'
import web5 from './i9.jpg'
import web6 from './i10.jpg'
function Services() {
    return (
        <>
          <div className='my-5'>
              <h1 className='text-center'>Our Services</h1>
              </div>
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row gy-4'>

                    <Card imgsrc={web1} title='Web Development' text='Some quick example text to build on the card title and make up the bulk of the card'/>
                    <Card imgsrc={web2}  title='App Development' text='Some quick example text to build on the card title and make up the bulk of the card'/>
                    <Card imgsrc={web3}  title='Marketing' text='Some quick example text to build on the card title and make up the bulk of the card'/>
                    <Card imgsrc={web4}  title='Sales' text='Some quick example text to build on the card title and make up the bulk of the card'/>
                    <Card imgsrc={web5}  title='Software Development' text='Some quick example text to build on the card title and make up the bulk of the card'/>
                    <Card imgsrc={web6}  title='Digital Marketing' text='Some quick example text to build on the card title and make up the bulk of the card'/>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default Services
