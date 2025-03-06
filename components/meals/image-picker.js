'use client'
import React, { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

const ImagePicker = ({label, name}) => {
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef()
    const handleImagePick = () => {
        imageInput.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (!file) {
            setPickedImage(null)
            return;
        }
        const reader = new FileReader()
        reader.onload = () => {
            setPickedImage(reader.result)
        }
        reader.readAsDataURL(file)
    }
  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet!</p>}
                {pickedImage && (
                    <Image src={pickedImage} alt='The image selected by the user.' fill/>
                )}
            </div>
            <input
                className={classes.input}
                type='file'
                id={name}
                name={name}
                accept='image/jpg,image/jpeg'
                ref={imageInput}
                onChange={handleImageChange}
                required
            />
            <button type='button' onClick={handleImagePick} className={classes.button}>
                Pick an image
            </button>
        </div>
    </div>
  )
}

export default ImagePicker