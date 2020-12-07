import Footer from './Footer';

import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

// TODO(slightlyoff): factor out common JSON parsing & caching of this file
const DATA_URL =
  'https://gist.githubusercontent.com/Viraj-Bhartiya/d6b03a802ca21c360c6461db38e73129/raw/3da99bac815a3d66d81be5c656a6aa53d389cc23/data.json';

function About() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFAQs = () => {
    fetch(DATA_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFaq(data.faq);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>About - covid19india.org</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="About">
        {faq.map((faq, index) => {
          return (
            <div
              key={index}
              className="faq fadeInUp"
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <h2 className="question">{faq.question}</h2>
              <h2
                className="answer"
                dangerouslySetInnerHTML={{__html: faq.answer}}
              ></h2>
            </div>
          );
        })}
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default About;
