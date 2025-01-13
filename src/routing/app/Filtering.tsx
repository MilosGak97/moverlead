const Filtering = () => {
    const pictures = [
        "https://photos.zillowstatic.com/fp/57484ee295ed5a17ba694ab1c062d4e8-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/2876b78d43d87851fbc1b6eb591ec9ea-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/3be1920e07a23838fc837477d7322d9e-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/5fe847d5e9922ce2ececd690cbcc13d0-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/d26197b9f58ff7bea22db206b60d678a-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/19c533dc055973e0d62d6a0a32b1a621-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/359ec0b07fee9fd394c37f55693293ba-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/9e451afd02e9cf5ca085f85da0cfe668-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/fd4248de063494be707e125ae8c6b548-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/f3399af2d1547885855fd59ad2ec129e-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/4f5dfb666e3e7d2f7e2295d44968662c-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/caa9c84c599c172dd9886c14dc130383-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/78f01dbd04c8aec2fb3c49fa17f0b3f9-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/10d01344a1437213af523b6af90670fa-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/11eb74e4aa6fe5c6412cca37760f2d66-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/0871b4d215acd2fbae8b871287638306-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/bf8e521817759fb7de180a5f2ffbaa86-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/0cee8fbd3e3c95b309c6b3319434fb1d-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/f3d34845344fdbb1763a9146d55760e0-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/eba7b953e43908c64b97dcd94e69b141-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/9bbd0265715eec786964548a2c006caa-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/3f3c668fd78dd3b9d644dec8e29460e9-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/c6c984988835722e3de65451a64d7fec-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/a180a6d2a8a6b0198e365ddc7c5508b9-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/8d40d62623e0b04ba164b2bff5f0821b-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/b4e950d492d45eef1f3da62fc33aa094-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/368377112310ca9f05ad4d81833e9c86-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/d9beafceee50d8ecf47d5aba8da90b37-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/29cd8e9270c26a7aed61f35ddbbe138a-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/d03afe4f231d263b1f009e8b0a709f11-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/332ed722f0c01ab6a1e9ab7e33e9f4b7-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/ac0fab986ab72c6d816562eff54b72e4-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/adb436b80363c8701b8c35fd1b7b1b03-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/0ab4a6834b011949f8439950c5e39c18-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/dffff8e5cd9ba25fe5375256fdc25cfb-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/6c532c603d5afbb3390929b5f52a6c10-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/9effa871bfe4c787f44349f5464c5317-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/a28ea8b91215f0ff08b0a88051b1a66e-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/b80c78b213749360f06968becbcdaca9-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/367558229a68350346f82e2199f5efbf-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/3ccd7a927e525ebaac2002828909a99c-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/08063e7b5862ceccd1f7f1dfb3a700df-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/bfa546eba453ff0970c03794988ad828-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/8393a8b278ce4fde12551b1a8be16e5d-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/63640dd4e6d7c27788e0b9c0edb2cc05-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/a1d4cbeb9b974f8b68a698a4ed11caf7-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/4389c7fd386dfed564b81c6da882e660-cc_ft_576.jpg",
        "https://photos.zillowstatic.com/fp/edefac8147142965864f008b4b8f3091-cc_ft_576.jpg"
    ]

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                {pictures.map((picture, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={picture}
                            alt={`Property ${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Fixed buttons at the bottom */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                    className="px-6 py-3 bg-[#4379F2] text-white text-xl font-medium rounded-lg shadow-md hover:bg-[#365bb0] transition-colors duration-300"
                >
                    Empty
                </button>
                <button
                    className="px-6 py-3 bg-[#4379F2] text-white text-xl font-medium rounded-lg shadow-md hover:bg-[#365bb0] transition-colors duration-300"
                >
                    No Data
                </button>
                <button
                    className="px-6 py-3 bg-[#4379F2] text-white text-xl font-medium rounded-lg shadow-md hover:bg-[#365bb0] transition-colors duration-300"
                >
                    Full
                </button>
            </div>


            {/* Fixed button on the right side */}
            <div className="fixed bottom-4 right-8">
                <button
                    className="px-6 py-3 bg-[#4379F2] text-white text-xl font-medium rounded-lg shadow-md hover:bg-[#365bb0] transition-colors duration-300"
                >
                    322
                </button>
            </div>
        </>
    )
}

export default Filtering;