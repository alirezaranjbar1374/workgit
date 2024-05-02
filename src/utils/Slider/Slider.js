import React, { useEffect, useRef, useState } from 'react';
// import './slishow.css'
export default function SlidShow() {
    const slideshowContainerRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const dotRefs = useRef([]);
const [hidestyle,sethidestyle]=useState(0)
    const [slideIndex, setSlideIndex] = useState(1);

    const plusSlides = (n) => {
        showSlides(slideIndex + n);
       
    }

    useEffect(() => {
        setTimeout(() => {
            sethidestyle(prev=>prev+1)
        }, 6000);
        const intervalId = setInterval(() => {
            plusSlides(1); // به تعداد مورد نظر اسلایدها را تغییر دهید
        }, 3000); // زمان تغییر عکس‌ها به میلی ثانیه

        return () => clearInterval(intervalId); // پاک کردن interval در زمان unmount شدن کامپوننت
    }, [slideIndex]); // slideIndex به عنوان وابستگی تغییرات useEffect

    const currentSlide = (n) => {
        showSlides(n);
    }

    const showSlides = (n) => {
        let i;
        const slides = slideshowContainerRef.current.getElementsByClassName("mySlides");
        const dots = dotRefs.current;

        if (n > slides.length) {
            setSlideIndex(1);
        } else if (n < 1) {
            setSlideIndex(slides.length);
        } else {
            setSlideIndex(n);
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    const slidderdata = [
        { id: 1, img: "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif", numbertext: "1 / 5", captioin: " Text" },
        { id: 2, img: "https://files.virgool.io/upload/users/202283/posts/gtwoyqyarnll/xhwtzestctxb.jpeg", numbertext: "2 / 5", captioin: "Caption Tow" },
        { id: 3, img: "https://static.digiato.com/digiato/2023/03/image-3.jpeg", numbertext: "3 / 5", captioin: "Caption tree" },
        { id: 4, img: "https://static1.smartbear.co/smartbearbrand/media/images/blog/what%E2%80%99s-the-best-programming-language-to-learn-first.png?ext=.png", numbertext: "4 / 5", captioin: "Caption four" },
    ];

    return (
        <div className="slideshowcontainer" ref={slideshowContainerRef} style={{marginBottom:"30px"}}>
     {hidestyle==0 ? slidderdata.slice(0,1).map(item => {
                return (
                    <div className="mySlides fade" key={item.id}>
                        {/* <div className="numbertext">{item.numbertext}</div> */}
                    
                    <img className="imgslid" src={item.img} style={{ width: '100%',height:"400px",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} alt="Nature" />

                    
                
                        {/* <div className="text">{item.captioin}</div> */}
                    </div>
                );
            })
     : slidderdata.slice(0,4).map(item => {
                return (
                    <div className="mySlides fade" key={item.id}>
                        {/* <div className="numbertext">{item.numbertext}</div> */}
                    
                    <img className="imgslid" src={item.img} style={{ width: '100%',height:"400px",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} alt="Nature" />

                    
                
                        {/* <div className="text">{item.captioin}</div> */}
                    </div>
                );
            })           
        }

 {/* <a className="prev" onClick={() => plusSlides(-1)} ref={prevButtonRef}>❮</a>
            <a className="next" onClick={() => plusSlides(1)} ref={nextButtonRef}>❯</a>  */}
            <br />
            <div style={{ textAlign: 'center' }}>
                {slidderdata.map((_, index) => (
                    <span
                        key={index}
                        className="dot"
                        onClick={() => currentSlide(index + 1)}
                        ref={el => (dotRefs.current[index] = el)}
                    ></span>
                ))}
            </div>
        </div>
    )
}