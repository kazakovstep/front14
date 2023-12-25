import {withMainLayout} from "../../Layout/MainLayout/Main";
import Pic1 from "../../images/Paramount.png"
import Pic2 from "../../images/20th Century Fox.jpg"
import Pic3 from "../../images/fantastic.jpg"
import Pic4 from "../../images/Columbia.jpg"
import styles from "../../style/task14.module.css"
import React, {useEffect, useState} from "react";
import {InputRange} from "../../components/InputRange/InputRange";
import DreamWorks from "../../images/Dreamworks.jpg";
import Paramount from "../../images/Paramount.png";
import twentiethFox from "../../images/20th Century Fox.jpg";
import Columbia from "../../images/Columbia.jpg";
import Modal from "react-modal"
export const Task14 = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleItemClick = (event) => {
        const target = event.target;
        event.preventDefault();

        if (event.ctrlKey || event.metaKey) {
          target.classList.toggle(styles.selected);
        } else {
          const items = document.querySelectorAll(`.${styles.selected}`);
          items.forEach((item) => item.classList.remove(styles.selected));
          target.classList.add(styles.selected);
        }
  };

    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
      };

      const handleDragOver = (event) => {
        event.preventDefault();
      };
        const [totalSum, setTotalSum] = useState(0);

      const handleDrop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const item = document.getElementById(data);
        const target = event.target;

        if (target.textContent === "Корзина") {
          const value = parseInt(item.textContent);
          setTotalSum(totalSum - value);
          item.remove();
        }
      };

      useEffect(() => {
        const items = document.querySelectorAll("li");
        let sum = 0;

        items.forEach((item) => {
          const value = parseInt(item.textContent);

          if (!isNaN(value)) {
            sum += value;
          }
        });

        setTotalSum(sum);
      }, []);

    const element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.background = 'red';
    document.body.appendChild(element);

    element.style.position = 'absolute';

    let t = 0;

    function animateElement() {
      requestAnimationFrame(animateElement);

      if (t <= 1) {
        const x = 500 + (t * 500);
        const y = 500 + (Math.sin(t * Math.PI) * 100);

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        t += 0.01;
      }
    }

    const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.2 : 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);


  const [showModal, setShowModal] = useState(false);
    const [clickedLink, setClickedLink] = useState(null);

    useEffect(() => {
        const handleClick = (event) => {
            let target = event.target;
            let isLinkClicked = false;

            while (target && target !== event.currentTarget) {
                if (target.tagName === 'A') {
                    isLinkClicked = true;
                    break;
                }
                target = target.parentNode;
            }

            if (isLinkClicked) {
                setClickedLink(target.getAttribute('href'));
                setShowModal(true);
                event.preventDefault();
            }
        };

        document.getElementById('contents').addEventListener('click', handleClick);

        return () => {
            document.getElementById('contents').removeEventListener('click', handleClick);
        };
    }, []);

    const handleModalConfirm = () => {
        setShowModal(false);
        if (clickedLink) {
            window.location.href = clickedLink;
        }
    };

    const handleModalCancel = () => {
        setShowModal(false);
    };

    let block_slide = document.querySelector('div[id="slider"]');
    let block_with_slide = document.querySelector('div[id="divSlider"]')
    let size_out = (block_with_slide?.clientWidth/100)*10

    function handler(event){
        let cord_x = (event.clientX - size_out);
        if(cord_x < 0) {
            block_slide.style.left = "0";
        } else if(cord_x > block_with_slide?.clientWidth - 2*size_out - 10){
            block_slide.style.left = (block_with_slide?.clientWidth - 2*size_out - 10) + "px"
        } else{
            block_slide.style.left = cord_x + "px";
        }
    }

    block_slide?.addEventListener("mousedown", () => {
        document.addEventListener('mousemove', handler);
    });

    document.body.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handler);
    });


    return (
        <>
            <div onClick={animateElement}>Анимация</div>
            <div>
                <div className={styles.selectedImgBlock}>
                    {selectedImage ? (
                        <img className={styles.selectedImg} src={selectedImage} style={{ transform: `scale(${scale})` }}   alt="Selected Image" />
                    ) : (
                        <p>Изображение не было выбрано</p>
                    )}
                </div>
                <div className={styles.imageGallery}>
                    <img
                        src={Pic1}
                        style={{width: '200px', height: '200px'}}
                        alt={`Image`}
                        onClick={() => handleImageClick(Pic1)}
                        className={selectedImage === Pic1 ? 'selected' : ''}
                    />
                    <img
                        src={Pic2}
                        style={{width: '200px', height: '200px'}}
                        alt={`Image`}
                        onClick={() => handleImageClick(Pic2)}
                        className={selectedImage === Pic2 ? 'selected' : ''}
                    />
                    <img
                        src={Pic3}
                        style={{width: '200px', height: '200px'}}
                        alt={`Image`}
                        onClick={() => handleImageClick(Pic3)}
                        className={selectedImage === Pic3 ? 'selected' : ''}
                    />
                    <img
                        src={Pic4}
                        style={{width: '200px', height: '200px'}}
                        alt={`Image`}
                        onClick={() => handleImageClick(Pic4)}
                        className={selectedImage === Pic4 ? 'selected' : ''}
                    />
                </div>
            </div>
            <p>{totalSum}</p>
            <ul id="list" onClick={handleItemClick} onDragOver={handleDragOver} onDrop={handleDrop}>
                <li draggable="true" onDragStart={handleDragStart} id="item1">
                  1000
                </li>
                <li draggable="true" onDragStart={handleDragStart} id="item2">
                  1000
                </li>
                <li draggable="true" onDragStart={handleDragStart} id="item3">
                  1000
                </li>
                <li draggable="true" onDragStart={handleDragStart} id="item4">
                  1000
                </li>
                <li>Корзина</li>
            </ul>
            <div className={styles.divSlaider} id={"divSlider"}>
                <div className={styles.backSlaider}>
                    <div className={styles.Figure} id={"slider"}></div>
                </div>
            </div>
            <div id={"contents"}>
                <a href={"https://www.dreamworks.com/"} className={styles.circle_img} target={"_blank"} id={"redirect"}>
                    ссылка 1
                </a>
                <a href={"https://www.paramountpictures.com/"} className={styles.circle_img} target={"_blank"} id={"redirect"}>
                     ссылка 2
                  </a>
                <a href={"https://www.20thcenturystudios.com/"} className={styles.circle_img} target={"_blank"} id={"redirect"}>
                     ссылка 3
                </a>
                <a href={"https://www.sonypictures.com/"} className={styles.circle_img} target={"_blank"} id={"redirect"}>
                     ссылка 4
                </a>
                <Modal
                    className={styles.modal}
                    isOpen={showModal}
                    onRequestClose={handleModalCancel}
                    contentLabel="Leaving Confirmation"
                >
                    <h3>Вы действительно хотите покинуть страницу?</h3>
                    <button onClick={handleModalConfirm}>Да</button>
                    <button onClick={handleModalCancel}>Отмена</button>
                </Modal>
            </div>
        </>
    );
}
export default Task14;