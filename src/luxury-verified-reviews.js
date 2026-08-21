const verifiedReviews = [
  {
    name: 'Sandy',
    source: 'Airbnb',
    date: 'June 2026',
    order: 202606,
    text: 'This was a lovely cottage for our family of 5 to land at during our week long journey in Ireland. The instructions were all very clear and house was exactly as pictured and promised. Will highly recommend to any travelers who want a gem to relax in near the Irish Sea!'
  },
  {
    name: 'Jane Ann',
    source: 'Airbnb',
    date: 'June 2026',
    order: 202606,
    text: 'Such a welcoming host the kids loved the hot tub'
  },
  {
    name: 'Daniel',
    source: 'Airbnb',
    date: 'May 2026',
    order: 202605,
    text: 'The perfect place for a family getaway. Julianne was amazing, always going above and beyond. The house felt like a real home and exceeded all expectations. A must visit, we will be back!'
  },
  {
    name: 'jason gartland',
    source: 'Google',
    date: '3 months ago',
    order: 202605,
    text: 'We are just home from a wonderful stay at this little gem of a home away from home. You want for nothing as soon as you step inside the door, peaceful, cosy and lots of extras that really make your stay a wonderful experience. Our toddler really loved the hot tub and the games that were available. Within walking distance to local shop, lovely beach and a very nice bar. We would highly recommend to all, you will not be disappointed 😁'
  },
  {
    name: 'Daniel Culliton',
    source: 'Google',
    date: '3 months ago',
    order: 202605,
    text: "Beautiful family home with everything you could need for the perfect weekend getaway. Can't wait for the next trip back!"
  },
  {
    name: 'Frances',
    source: 'Airbnb',
    date: 'April 2026',
    order: 202604,
    text: "Julianne is such a warm & friendly communicator and this reflects very well on Julianne's home. It was absolutely perfect for us (2 adults, 1 child & 2 doggies). There are 4 bedrooms and they are beautifully decorated & 5 star beds/bedding! The outside space is amazing! Fully secure for doggies/kiddies, plenty of seating areas & cozy egg chairs. Fully equipped with BBQ and excellent hot tub for the evenings. We felt really at home here and can't wait to come back. Thank you Julianne & family."
  },
  {
    name: 'Clare',
    source: 'Airbnb',
    date: 'March 2026',
    order: 202603,
    text: 'Easy to find, very safe for children and pets - secure lovely big back garden and in the gated community. 5 minutes to a gorgeous pebble beach and 5 minutes into Gorey, a lovely little town. Would definitely recommend popping in to the Coach House for coffee and a bap! Amazing communications with Julianne, thank you so much - we all had the best weekend xx'
  },
  {
    name: 'Imelda',
    source: 'Airbnb',
    date: 'March 2026',
    order: 202603,
    text: 'We stayed here from Friday until Monday, Julianne was very friendly and left clear instructions for check in/ out. There were 5 adults and 3 kids and we had loads of space. The house was full of character, beautiful, clean and lots of games and toys for the kids to use. The location was great, 10 to 15 minutes drive away to courtown, Kia ora mini face and the swimming pool. We would definitely like to return in the summer. Thank you Julianne and Niall From Imelda and all the gang x'
  },
  {
    name: 'Alice Fitzgerald',
    source: 'Google',
    date: '6 months ago',
    order: 202602,
    text: 'Our stay at Juliette’s was fantastic! The hot tub and garden were both fun and relaxing in equal measures and a real novelty for our 9 and 12 year old. They also loved the table tennis table facilities in the holiday park nearby. The house is in a small and peaceful gated estate. I slept so well. It was so quiet and the bed was so comfortable. The house is cosy with a well stocked kitchen. We had everything we needed. The location is excellent. I went for lovely walks. You can walk to the little shop in Ballymoney, Seafield Resort and the beach. Juliette was so helpful and prompt in her communication. Would highly recommend.'
  },
  {
    name: 'Sarah Higginbotham',
    source: 'Google',
    date: 'a year ago',
    order: 202508,
    text: "We absolutely loved this house. It feels like a really loved home, had everything we needed and some lovely touches like board games and kids toys. The beds are incredibly comfortable and luxurious and the hot tub made the trip extra special. The host was brilliant, super easy to communicate with and gave us loads of info about lovely local walks, places to eat etc. We'll definitely be coming back :)"
  },
  {
    name: 'Darren O’Reilly',
    source: 'Google',
    date: 'a year ago',
    order: 202508,
    text: 'I visited here with my sister, brother in law and her three children. This was a real gem, and we were very thankful to find it! The house was homely, with all the mod cons needed for a week away with kids. The hot tub was a family favourite, and close to Courtown. If anything the photos undersold it, with the garden and garden furniture a very welcome surprise! This extended the social space (very useful with a family with kids). While the weather was hit and miss (hardly the host’s fault - it is Ireland!), we loved the break. Julianne was always quick to respond to messages, and I appreciated the more bite size approach to information before, during and at the end of the stay. The kids have already prepared their itinerary for next summer!'
  },
  {
    name: 'Libby Sweeney',
    source: 'Google',
    date: 'a year ago',
    order: 202508,
    text: 'Beautiful place. Immaculately clean. The host really makes sure that there is nothing you could want for, dry robes, wetsuits, toiletries to name just a few. Luxurious beds and bed linen. The hot tub was just a wonderful extra. The host was very responsive. The information provided on the locality was second to none. I would highly recommend a stay here. We’ll definitely be back.'
  },
  {
    name: 'Sandra Cole',
    source: 'Google',
    date: '9 months ago',
    order: 202511,
    text: 'House is lovely and spacious.... lovely enclosed garden for pets...beds are very very comfortable....and of course added use of hot tub fantastic! Had a wonderful 3 days with weather being so lovely for this time of the year. Also a short drive to the beach another bonus! Sandra'
  },
  {
    name: 'Joanne',
    source: 'Airbnb',
    date: 'November 2025',
    order: 202511,
    text: 'This property truly met all our expectations. It’s spacious and comfortable and would work extremely well for families. Julieanne was a great host who sent clear comms and loads of useful information, including videos on how to operate various items. The hot tub and enclosed garden (as we bought our dog) was a real bonus and we definitely enjoyed it. Would 100% consider booking again'
  },
  {
    name: 'Cathriona Mary',
    source: 'Airbnb',
    date: 'November 2025',
    order: 202511,
    text: 'Beautiful house with everything you could possibly need for a break away. Lovely house and great location. Very safe and secure area'
  },
  {
    name: 'Anita',
    source: 'Airbnb',
    date: 'November 2025',
    order: 202511,
    text: 'Loved our stay! Beautiful house in a perfect location.'
  },
  {
    name: 'Sandra',
    source: 'Airbnb',
    date: 'October 2025',
    order: 202510,
    text: 'absolutely fabulous! safe garden for pets...beds so comfortable....so clean...near to beach...hot tub fabulous! Julianne was also very quick replying to any questions we had... would definitely stay again!'
  },
  {
    name: 'Matt',
    source: 'Airbnb',
    date: 'October 2025',
    order: 202510,
    text: 'Great Airbnb, great host. Would definitely book again. Short drive to the beach and the local town.'
  },
  {
    name: 'Jochen',
    source: 'Airbnb',
    date: 'September 2025',
    order: 202509,
    text: 'We had a wonderful stay! The place was very clean, exactly as described, and located in a quiet area. Communication with Julianne was excellent – quick replies, helpful information, and everything was explained clearly. All the basics were available, so we didn’t miss anything. We would 100% recommend this place and would be happy to come back anytime.'
  },
  {
    name: 'Mark',
    source: 'Airbnb',
    date: 'September 2025',
    order: 202509,
    text: 'Smashing, family size, pet friendly, private retreat near Ballymoney beach and Gorey town centre. Julianne is a fabulous host providing clear instructions on the very well equipped house and advice on local amenities. The hot tub and large garden/outdoor entertaining area top off this perfect holiday let.'
  },
  {
    name: 'Rachel',
    source: 'Airbnb',
    date: 'May 2025',
    order: 202505,
    text: 'Julianne’s place was just what we were looking for - a quiet retreat where we could do a bit of working from home… and then unplug in the afternoon. Gorgeous area and close to the beach. Julianne was such a gracious host and incredibly responsive. If we’re back in the area we will absolutely be booking with her again. Thank you so much!'
  },
  {
    name: 'Tamara',
    source: 'Airbnb',
    date: 'March 2026',
    order: 202603,
    text: 'We had a lovely time!! The place was so beautiful and homey. It was a great location and the host was responsive and friendly. The hot tub made our trip so enjoyable!'
  },
  {
    name: 'Muriel',
    source: 'Airbnb',
    date: 'March 2026',
    order: 202603,
    text: 'fabulous house, amazing location. will be back..'
  },
  {
    name: 'Tara',
    source: 'Airbnb',
    date: 'February 2026',
    order: 202602,
    text: 'Lovely home, warm and comfortable, safe area for kids. Good playgrounds near an considering we went in off season, plenty to do still.'
  },
  {
    name: 'Rosemary',
    source: 'Airbnb',
    date: 'February 2026',
    order: 202602,
    text: 'It\'s a well equipped house that feels like a home. I would definitely recommend staying.'
  },
  {
    name: 'Maedhb',
    source: 'Airbnb',
    date: 'January 2026',
    order: 202601,
    text: 'Had a great weekend at this property, and there was loads of space, Julianne was very helpful and replied very quickly'
  },
  {
    name: 'Jolie',
    source: 'Airbnb',
    date: 'January 2026',
    order: 202601,
    text: 'Had a wonderful stay and the host was very informative.'
  },
  {
    name: 'Trish',
    source: 'Airbnb',
    date: 'December 2025',
    order: 202512,
    text: 'Home from home, it was so relaxing and so homely, Kids loved the jacuzzi too. 😊'
  }
].sort((a, b) => b.order - a.order);

const initial = (name) => name.trim().charAt(0).toUpperCase();

const reviewCard = (review) => `
  <article class="luxury-review-card">
    <div class="luxury-review-card__top">
      <span class="luxury-review-avatar" aria-hidden="true">${initial(review.name)}</span>
      <div>
        <div class="luxury-review-card__name">${review.name}</div>
        <div class="luxury-review-card__source"><img src="${review.source === 'Google' ? '/images/google-g-logo.svg' : '/images/airbnb-logo.svg'}" alt="${review.source}"> ${review.source}</div>
      </div>
    </div>
    <div class="luxury-review-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
    <blockquote>${review.text}</blockquote>
    <time>${review.date}</time>
  </article>`;

queueMicrotask(() => {
  if (!window.location.pathname.startsWith('/luxury')) return;

  const carousel = document.querySelector('[data-guest-review-carousel]');
  if (!carousel || carousel.dataset.verifiedReviews === 'true') return;

  carousel.innerHTML = verifiedReviews.map(reviewCard).join('');
  carousel.dataset.verifiedReviews = 'true';
});

export { verifiedReviews };
