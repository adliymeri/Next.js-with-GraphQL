import { useState, useEffect } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import styles from '@/styles/Home.module.scss'
import Link from 'next/link';
import Image from 'next/image';

//Fetch data from WP custom post

function HeroSection(props) {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost/UDV/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
          query Projects {
            projects {
              nodes {
                id
                title
                content
                slug
                projectFields {
                  place
                  additionaldescription
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
          `,
        }),
      });
      const { data } = await response.json();
      setData(data.projects.nodes);

      // Sort the custom post data by date in descending order

      setData(data.projects.nodes.sort((a, b) => new Date(b.date) - new Date(a.date)));

      // Pass the data to the parent component

      props.onHeroData(data.projects.nodes);
    }
    fetchData();
  }, [props.onHeroData]);

  // Change the data displayed in the hero-section, from one custom post to another after 15 sec
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress = progress + 1;
      if (newProgress === 100) {
        setCurrentIndex((currentIndex + 1) % data.length);
        setProgress(0);
      } else {
        setProgress(newProgress);
      }

      // Calculate the progress percentage
      const progressPercentage = Math.floor((newProgress / 100) * 100);

      // Update the currentProgress state variable
      setCurrentProgress(progressPercentage);
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex, data.length, progress]);

  // Show the last four posts

  const currentPost = data[currentIndex];
  const lastFourPosts = data.slice(0, 4);
  const handleSliderClick = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };
  
  return (
    <div className={styles.heroSection} style={{ 
      backgroundImage: currentPost && currentPost.featuredImage ? `url(${currentPost.featuredImage.node.sourceUrl})` : "", 
      backgroundSize: "cover",backgroundPosition: "center center",
      transition: "background-image 0.5s ease-in-out"
      }}>
      
      {currentPost && (
      <div className={styles.mainContainer}>
        <div className={styles.mainTitle} key={currentPost.id}>
          <h1 className={styles.h1}>{currentPost.title}</h1>
          <div className={styles.secondaryContainer}>
            <p className={styles.p}>View Project</p>
            <img className={styles.img} src="/photos/Icon feather-arrow-right.png"></img>
          </div>
        </div>
        <div className={styles.sliderGroup}>
          {lastFourPosts.map((post, index) => (
            <div key={post.id} className={styles.slider}
                style={{ 
                  color: `${index === currentIndex ?  '#FFFFFF' : '#c0c0c0'}`
                  }}
                 onClick={() => handleSliderClick(index)}>
              <h2 className={styles.h2}>{post.title}</h2>
              <p className={styles.p2}>{post.projectFields.place}</p>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} style={{ width: `${index === currentIndex ? currentProgress : 0}%` }}></div>
                <div className={styles.progressBarBottom}></div>
              </div>
            </div>
          ))}
        </div>
       </div>
      )}
      <div className={styles.socialContainer}>
        <Link href="https://www.instagram.com/udvarchitects/" target="_blank">
          <Image  alt="Instagram Logo" src="/photos/Icon awesome-instagram.png" width={19} height={19}/>
        </Link>
        <Link href="https://www.facebook.com/UDVarchitects/" target="_blank">
          <Image  alt="Facebook Logo" src="/photos/Icon awesome-facebook-f.png" width={10} height={19}/>
        </Link>
        <Link href="https://www.behance.net/gallery/122028387/UDV-Architects-Studio" target="_blank">
          <Image  alt="Behance Logo" src="/photos/Icon awesome-behance.png" width={24} height={15}/>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
