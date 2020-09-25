import React from 'react'
import {
  AtSign,
  Check,
  ChevronLeft,
  Monitor,
  Search,
  ArrowRight,
  Feather,
  Mail,
  PieChart,
  Smartphone,
} from 'react-feather'

const ServiceFeatures = () => {
  return (
    <section className="section thick">
      <div className="container row">
        <div className="col-lg-11 mx-auto">
          <div className="container row">
            <div className="col-lg-4 FeatureIcon">
              <Search size="40px" className="my-4" />
              <div className="py-3">
                <h5>SEO</h5>
                <p>
                  Organically drive traffic to your website using search engine
                  optimization to help people in the Tampa Bay area find your
                  business online.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon">
              <ChevronLeft size="40px" className="my-4" />
              <div className="py-3">
                <h5>Web Design</h5>
                <p>
                  Create a modern website as unique as your business that works
                  well on any device and loads quickly.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon">
              <Monitor size="40px" className="my-4" />
              <div className="py-3">
                <h5>E-Commerce</h5>
                <p>
                  Do you have an opportunity to bring the spirit of St. Pete
                  online? We can help you get your online store off the ground.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <AtSign size="40px" className="my-4" />
              <div className="py-3">
                <h5>Email &amp; SMS Marketing</h5>
                <p>
                  Build a pipeline of customers and stay in-touch with them
                  about exciting updates to your business.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <Check size="40px" className="my-4" />
              <div className="py-3">
                <h5>Content &amp; Blog Writing</h5>
                <p>
                  Your business has a unique perspective and story to tell, we
                  can help you create and amplify your message.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <ChevronLeft size="40px" className="my-4" />
              <div className="py-3">
                <h5>Social Media Marketing</h5>
                <p>
                  Connect with customers and potential customers on social media
                  - giving them valuable updates &amp; information or just
                  showing them a fun look into a day in the&nbsp;life.
                </p>
              </div>
            </div>
            <div className="col-lg-3 FeatureIcon px-2">
              <ChevronLeft size="40px" className="my-4" />
              <div className="py-3">
                <h5>Branding &amp; Strategy</h5>
                <p>
                  Need help bringing out the heart of what makes your business
                  unique? We can help you identify your target customer, unique
                  positioning and how to bring that to life visually with a
                  brand identity and&nbsp;logo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures
