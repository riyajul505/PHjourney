
const PriceGym = () => {
    const gym = [
        { 
          "id": 1, 
          "features": "Fully equipped weightlifting area", 
          "price": 50,
          "open_hours": "6:00 AM - 10:00 PM",
          "instructors": ["John Doe", "Jane Smith"],
          "amenities": ["Lockers", "Showers"]
        },
        { 
          "id": 2, 
          "features": "Cardio machines (treadmills, ellipticals)", 
          "price": 40,
          "open_hours": "5:00 AM - 11:00 PM",
          "instructors": ["Mike Johnson", "Emily Brown"],
          "amenities": ["Water fountain", "Towel service"]
        },
        { 
          "id": 3, 
          "features": "Group fitness classes (yoga, HIIT, etc.)", 
          "price": 60,
          "open_hours": "7:00 AM - 9:00 PM",
          "instructors": ["Sarah Lee", "David Wilson"],
          "amenities": ["Mats", "Resistance bands"]
        },
        { 
          "id": 4, 
          "features": "Indoor swimming pool", 
          "price": 70,
          "open_hours": "8:00 AM - 10:00 PM",
          "lifeguards": true,
          "amenities": ["Sauna", "Hot tub"]
        },
        { 
          "id": 5, 
          "features": "Personal training sessions", 
          "price": 80,
          "open_hours": "By appointment",
          "trainers": ["Alex Garcia", "Emma Taylor"],
          "amenities": ["Private workout area", "Nutrition counseling"]
        }
      ]
      
    return (
        <div>
            {/* {
                gym.map(item => <Priceopt key={item.id} items={item}></Priceopt>)
            } */}
        </div>
    );
};

export default PriceGym;