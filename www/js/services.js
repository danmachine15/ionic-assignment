angular.module('calorific.services', [])

.factory('Foods', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var foods = [{
    id: 0,
    name: 'Apple',
    calories: 52,
    image: 'img/Fruits/apple.jpg'
  }, {
    id: 1,
    name: 'Banana',
    calories: '94',
    image:'img/Fruits/banana.jpeg'
  },{
    id: 2,
    name: 'Blueberries',
    calories: '81',
    image:'img/Fruits/blueberries.jpg'
  }, {
    id: 3,
    name: 'Grapefruits',
    calories: '82',
    image:'img/Fruits/grapefruit.jpeg'
  }, {
    id: 4,
    name: 'Grapes',
    calories: '114',
    image:'img/Fruits/grapes.jpeg'
  },{
    id: 5,
    name: 'Melon',
    calories: 24,
    image: 'img/Fruits/melon.jpg'
  }, {
    id: 6,
    name: 'Orange',
    calories: '86',
    image:'img/Fruits/oranges.jpg'
  },{
    id: 7,
    name: 'Peaches',
    calories: '42',
    image:'img/Fruits/peaches.jpg'
  }, {
    id: 8,
    name: 'Pear',
    calories: '98',
    image:'img/Fruits/Pear.jpg'
  }, {
    id: 9,
    name: 'Pineapple',
    calories: '76',
    image:'img/Fruits/pineapple.jpeg'
  },{
    id: 10,
    name: 'Raspberries',
    calories: 60,
    image: 'img/Fruits/Raspberries.jpg'
  }, {
    id: 11,
    name: 'Strawberry',
    calories: '46',
    image:'img/Fruits/strawberry.jpeg'
  },{
    id: 12,
    name: 'Chicken',
    calories: '216',
    image:'img/Meats/chicken.jpg'
  }, {
    id: 13,
    name: 'Beef',
    calories: '193',
    image:'img/Meats/beef.jpg'
  }, {
    id: 14,
    name: 'Pork',
    calories: '145',
    image:'img/Meats/pork.jpg'
  },{
    id: 15,
    name: 'Carrot',
    calories: 52,
    image: 'img/Veg/carrot.jpg'
  }, {
    id: 16,
    name: 'Banana',
    calories: '94',
    image:'img/Fruits/banana.jpeg'
  },{
    id: 17,
    name: 'Blueberries',
    calories: '81',
    image:'img/Fruits/blueberries.jpg'
  }, {
    id: 18,
    name: 'Grapefruits',
    calories: '82',
    image:'img/Fruits/grapefruit.jpeg'
  }, {
    id: 19,
    name: 'Grapes',
    calories: '114',
    image:'img/Fruits/grapes.jpeg'
  },{
    id: 20,
    name: 'Apple',
    calories: 52,
    image: 'img/Fruits/apple.jpg'
  }, {
    id: 21,
    name: 'Banana',
    calories: '94',
    image:'img/Fruits/banana.jpeg'
  },{
    id: 22,
    name: 'Blueberries',
    calories: '81',
    image:'img/Fruits/blueberries.jpg'
  }, {
    id: 23,
    name: 'Grapefruits',
    calories: '82',
    image:'img/Fruits/grapefruit.jpeg'
  }, {
    id: 24,
    name: 'Grapes',
    calories: '114',
    image:'img/Fruits/grapes.jpeg'
  },{
    id: 25,
    name: 'Apple',
    calories: 52,
    image: 'img/Fruits/apple.jpg'
  }, {
    id: 26,
    name: 'Banana',
    calories: '94',
    image:'img/Fruits/banana.jpeg'
  },{
    id: 27,
    name: 'Blueberries',
    calories: '81',
    image:'img/Fruits/blueberries.jpg'
  }, {
    id: 28,
    name: 'Grapefruits',
    calories: '82',
    image:'img/Fruits/grapefruit.jpeg'
  }, {
    id: 29,
    name: 'Grapes',
    calories: '114',
    image:'img/Fruits/grapes.jpeg'
  }];

  return {
    all: function() {
      return foods;
    },
    remove: function(chat) {
      foods.splice(foods.indexOf(food), 1);
    },
    get: function(foodId) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(foodId)) {
          return foods[i];
        }
      }
      return null;
    }
  };
});
