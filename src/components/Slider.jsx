import { useState } from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight, Close } from "@mui/icons-material";

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(null);

    const changeSlide = (direction) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(images.length - 1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === images.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }
    };

    return (
        <div className="relative w-full h-[350px] sm:h-[280px] flex gap-4">
            {imageIndex !== null && (
                <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-between items-center z-50">
                    <IconButton
                        className="flex items-center justify-center"
                        onClick={() => changeSlide("left")}
                    >
                        <ChevronLeft sx={{ fontSize: 50 }} className="text-white" />
                    </IconButton>

                    <div className="flex-10 flex justify-center items-center">
                        <img
                            src={images[imageIndex]}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <IconButton
                        className="flex items-center justify-center"
                        onClick={() => changeSlide("right")}
                    >
                        <ChevronRight sx={{ fontSize: 50 }} className="text-white" />
                    </IconButton>

                    <IconButton
                        className="absolute top-0 right-0 p-4"
                        onClick={() => setImageIndex(null)}
                    >
                        <Close sx={{ fontSize: 36 }} className="text-white" />
                    </IconButton>
                </div>
            )}

            <div className="flex-3 sm:flex-2">
                <img
                    src={images[0]}
                    alt=""
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    onClick={() => setImageIndex(0)}
                />
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4">
                {images.slice(1).map((image, index) => (
                    <img
                        src={image}
                        alt=""
                        key={index}
                        className="h-[100px] sm:h-[80px] object-cover rounded-lg cursor-pointer"
                        onClick={() => setImageIndex(index + 1)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
