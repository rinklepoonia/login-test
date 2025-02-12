import React, { useState } from 'react'
const ImageUpload = () => {
   const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Convert files to URLs and add them to the images array
      const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  };
  return (
      <div className='p-4 max-md:flex justify-center max-md:w-full'>
        <div className='border border-dashed border-indigo-600 max-w-[500px] rounded-xl p-5'>
           <input
           type="file"
           accept="image/*"
            multiple
          onChange={handleImageChange}
          className="border p-2 flex mx-auto text-black text-base leading-normal w-full"
            />
         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded Preview ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
            </div>
      </div>
  )
}

export default ImageUpload