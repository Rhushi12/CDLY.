interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    return (
        <div className="w-full lg:w-3/5 relative min-h-[60vh] lg:min-h-screen border-r border-gray-200">
            <div className="absolute inset-0 bg-gray-100">
                <img
                    alt={productName}
                    className="w-full h-full object-cover grayscale contrast-110"
                    src={images[0]}
                />
            </div>
        </div>
    );
}
