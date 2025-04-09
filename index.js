const freelancers = [
      { name: 'Nathan', occupation: 'Coder', price: 60 },
      { name: 'Courtney', occupation: 'Dental Hygienist', price: 200},
      { name: 'Tina', occupation: 'Graphic Designer', price: 45}
    ];

    const listContainer = document.getElementById('freelancerList');
    const averagePrice = document.getElementById('averagePrice');

    function calculateAverage() {
      const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
      return (total / freelancers.length);
    }

    function render() {
      listContainer.innerHTML = '';
      freelancers.forEach(freelancer => {
        const item = document.createElement('div');
        item.className = 'freelancer';
        item.textContent = `${freelancer.name} ------- ${freelancer.occupation} ------ $${freelancer.price}`;
        listContainer.appendChild(item);
      });

      averagePrice.textContent = calculateAverage();
    }

    function addFreelancer(newFreelancer) {
      freelancers.push(newFreelancer);
      render();
    }

    // Render Update
    render();

    // Add new freelancers
    setTimeout(() => addFreelancer({ name: 'Megan', occupation: 'Dog Groomer', price: 75 }), 4000);
    setTimeout(() => addFreelancer({ name: 'Christopher', occupation: 'Financial Advisor', price: 40 }), 6000);
    setTimeout(() => addFreelancer({ name: 'Bill', occupation: 'Trailer Sales', price: 120 }), 10000);