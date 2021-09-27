const arr = [
  {
    date: '10.09.2021',
    title: 'New Member added',
    status: 'Pending',
    points: '10pts'
  },
  {
    date: '08.09.2021',
    title: 'Someone donated points',
    status: 'Pending',
    points: '10pts'
  },
]

const chunk = [
  {
    date: '29.10.2021',
    title: 'New Member added',
    status: 'Completed',
    points: '10pts'
  }
]

function getActivities(activities) {
  const resArr = [];
  const dateObj = {};
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    const month = activity.date.split('.')[1];
    if (!dateObj[month]) {
      dateObj[month] = [];
    }
    dateObj[month].push(activity);
  }
}

getActivities(arr);
