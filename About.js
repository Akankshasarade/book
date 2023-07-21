import React, { useState, useEffect } from "react";
import MarkDown from "react-markdown";
import readmePath from "../data/README.md";

const About = () => {
  const [markDownText, setMarkDownText] = useState("");
  useEffect(() => {
    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkDownText(text);
      });

    document.title = "About || React BookStore App";
  }, []);

  return (
    <div class="card container border-0">
      <div class="card-body">
        <div className="top-content text-center">
          <h1 className="display-4">Hello, Interested Peoples!</h1>
          <p className="lead">
        
          Welcome to [Your Book Store Name]<br></br>

          At [Your Book Store Name], we believe in the magic of books.<br></br> Our journey began [X years ago], fueled by a deep love for literature and a vision to create a haven for book enthusiasts like you.
          <br></br> Nestled in [Your Store Location] (if physical store) or accessible online at [Your Website URL] (if an online store), we invite you to embark on a captivating literary adventure with us.
          
          Our Mission and Values
          <br></br>
          Our mission is simple: to inspire a lifelong love for reading and foster a vibrant reading community. We strive to curate a diverse and thoughtfully selected collection of books that cater to readers of all ages and interests. From timeless classics to the latest bestsellers, our shelves are a treasure trove of literary wonders waiting to be explored.
          <br></br>
          <br></br>
          <b>Passion for Books :</b>
          
          Books have the incredible power to transport us to distant worlds, spark our imaginations, and broaden our horizons. Our passion for books runs deep, and we aim to share that enthusiasm with each and every customer who walks through our doors or visits our online store. It is our firm belief that the right book can be a lifelong companion and a source of boundless inspiration.
          
          A Book Lover's Haven
          <br></br>
          Step into our cozy [physical store name], where the aroma of freshly printed pages fills the air, or browse our user-friendly website, where you can lose yourself in an array of captivating titles. Our friendly and knowledgeable staff are always at your service, ready to help you discover the perfect book that speaks to your heart and mind.
          <br></br>
         <br></br>
         <b>Contact Us :</b> 
          
          Visit us in-store at [Your Store Address] or explore our online catalog at [Your Website URL]. For any inquiries or recommendations, don't hesitate to reach out to us at [Your Email Address] or give us a call at [Your Contact Number].
          <br></br>
          Join us on this wonderful voyage of words and let's celebrate the transformative power of books together.
          <br></br>
          Happy reading!
          
          The [Your Book Store Name] Team
          
          Feel free to customize the above text according to the specifics of your book store. Make sure to include relevant details like your store's location, website URL, and any special features or events unique to your store. I hope this helps you create a compelling "About Us" section for your book store!
        
          </p>
          <hr className="my-4" />
        </div>
        <div className="bottom-content" style={{ fontSize: "1.2rem" }}>
          <MarkDown source={markDownText} />
        </div>
      </div>
      <div class="card-footer">
        <h5 className="display-5 text-center">
          A React Project By &copy;{" "}
          <a
            href="https://github.com/Akankshasarade/book"
            rel="noopener noreferrer"
            target="_blank"
          >
            github/Akankshasarade
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;
