import React from 'react';

const Services = () => {
  const stats = [
    { title: 'Total Sessions', value: 0 },
    { title: 'Total Duration', value: '0 Mins' },
    { title: 'Total Reviews', value: 0 },
    { title: 'Avg Ratings', value: 0 },
  ];

  const services = [
    { title: 'Quick Call', description: '30 mins quick call to achieve your goals faster with personalised road map.', duration: '30 Min', price: '₹XXX', type: '1:1 Call' },
    { title: '60 min Mentor Meet', description: '1:1 mentorship session for personalised, hands-on and practical guidance.', duration: '60 Min', price: '₹XXXX', type: '1:1 Call' },
    { title: 'Ask a Query', description: 'Query Query', duration: '3 Days Revert', price: '₹XXX', type: 'Query' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-purple-100 text-purple-700 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mb-2">{stat.title}</h3>
            <p className="text-xl">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex items-center mb-2">
              <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2">{service.type}</span>
            </div>
            <h2 className="text-lg font-bold mb-1">{service.title}</h2>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <div className="text-sm text-gray-500 mb-1">{service.duration} Duration</div>
            <div className="text-sm text-gray-500 mb-4">Price: {service.price}</div>
            <div className="text-xs text-gray-500">Views: 0 | Bookings: 0 | Earnings: 0 | Conversion Rate: 0%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
