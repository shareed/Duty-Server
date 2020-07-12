
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      taskname: 'Frodo',
      description: 'Go back Sam, I am goin gto Mordor alone',
      assigner_id: 1,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Sam',
      description: 'Of course you are, and I am coming with you',
      assigner_id: 4,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Boromir',
      description: 'One does nto simply walk into Mordor',
      assigner_id: 3,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Aragorn',
      description: 'Deeds will not be less valiant because they are unpraised',
      assigner_id: 2,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Lady Galadriel',
      description: 'Even the smallest person can change the course of  history',
      assigner_id: 5,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Sam',
      description:
        "There is some good in this world, Mr. Frodo... and it's worth figting for",
      assigner_id: 6,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Aragorn',
      description:
        'A hunted man sometimes wearies of distrust and longs for friendship',
      assigner_id: 1,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Buy Flowers',
      description:
        'Yet such is oft the course of deeds that move the wheels of the world: small hands do them because the must, while the eyes of the great are elsewhere',
      assigner_id: 2,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Plan workout routine',
      description:
        'It is a strange fate that we should suffer so much fear and doubt over so small a thing... such a little thing',
      assigner_id: 3,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Go skating',
      description:
        'He that breaks a thing to find out what it is, has left the path of wisdom',
      assigner_id: 4,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Go to DMV',
      description:
        'All we have to decide is what to do with the time that is given us',
      assigner_id: 5,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Stop by post office',
      description:
        'The burned hand teaches best. After that advice about fire goes to the heart',
      assigner_id: 6,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Buy food for dinner',
      description: 'Faithless is he that says farewell when the road darkens',
      assigner_id: 1,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Plan Family night',
      description:
        'Your time will come. You will face the same Evil, and you will defeat it',
      assigner_id: 2,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Plan date night',
      description:
        'A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to',
      assigner_id: 3,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Plan Party',
      description: "It's the job that's never started as takes longest to finish",
      assigner_id: 4,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Watch New Tv Shows',
      description: 'I will take the Ring, though I do not know the way',
      assigner_id: 5,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Wash Car',
      description: 'Seeing is both good and perilous',
      assigner_id: 6,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Clean house',
      description:
        'It is but a shadow and a thought that you love. I cannot give you what you seek',
      assigner_id: 1,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Check Mail',
      description: "I don't know and I would rather not guess",
      assigner_id: 2,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Create a website',
      description:
        "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to",
      assigner_id: 3,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Wash Car',
      description:
        'It is but a shadow and a thought that you love. I cannot give you what you seek',
      assigner_id: 4,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Plant garden',
      description: "I don't know and I would rather not guess",
      assigner_id: 5,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
    {
      taskname: 'Walk the dog',
      description:
        "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to",
      assigner_id: 6,
      compensation: 'You will get something new!!!!',
      duedate: 2020-03-08
    },
  ]);
};

