
const ChickenOption = () => {
  const chickenItems = [
    {
      id: 1,
      title: '2 CRISPY TENDERS',
      description: '2 Crispy Tenders with 1 flavor',
      price: '$2.79',
      calories: '240 - 360 cal',
      imgSrc: 'https://i.ibb.co.com/rQ1Tj1D/food-21.png', // Replace with real image
    },
    {
      id: 2,
      title: '5 BONELESS WINGS',
      description: '5 Boneless Wings with 1 flavor',
      price: '$3.50',
      calories: '400 - 550 cal',
      imgSrc: 'https://i.ibb.co.com/rQ1Tj1D/food-21.png', // Replace with real image
    },
    {
      id: 3,
      title: '5 CLASSIC WINGS',
      description: '5 Classic (Bone-In) Wings with 1 flavor',
      price: '$6.49',
      calories: '350 - 500 cal',
      imgSrc: 'https://i.ibb.co.com/rQ1Tj1D/food-21.png', // Replace with real image
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl text-center font-bold mb-6">ADD MORE CHICKEN</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {chickenItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-medium">{item.price}</span>
              <span className="text-sm text-gray-500">{item.calories}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChickenOption;