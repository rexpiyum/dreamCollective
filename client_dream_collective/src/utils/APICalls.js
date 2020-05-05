export function createNewTopic(topic, callback) {
  alert(JSON.stringify(topic))
    fetch('/topics/',
      {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Mode': "CORS"
        }
      }).then(response => response.json())
      .then(data => { callback(data) }
      );
  }

  export function updateTopic(id, topic, callback) {
    fetch('/topics/' + id,
      {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Mode': "CORS"
        }
      }).then(response => response.json())
      .then(data => { callback(data) }
      );
  }

  export function readTopic(id, callback) {
    fetch('/topics/' + id,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Mode': "CORS"
        }
      }).then(response => response.json())
      .then(data => { callback(data) }
      );
  }

  export function readAllTopics(callback) {
    fetch('/topics/',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Mode': "CORS"
        }
      }).then(response => response.json())
      .then(data => { callback(data) }
      );
  }

