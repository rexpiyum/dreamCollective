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


  export function createNewFeature(feature, callback) {
    alert(JSON.stringify(feature))
      fetch('/features/',
        {
          method: 'POST',
          body: JSON.stringify(feature),
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Mode': "CORS"
          }
        }).then(response => response.json())
        .then(data => { callback(data) }
        );
    }


    export function readFeaturesOfTopic(topicId, callback) {
      fetch("/features/topic/"+topicId, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Mode: "CORS",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          callback(data);
        });
    }



    export function createNewPrompt(prompt, callback) {
      alert(JSON.stringify(prompt))
        fetch('/prompts/',
          {
            method: 'POST',
            body: JSON.stringify(prompt),
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
              'Mode': "CORS"
            }
          }).then(response => response.json())
          .then(data => { callback(data) }
          );
      }



      export function createNewResponse(response, callback) {
          fetch('/responses/',
            {
              method: 'POST',
              body: JSON.stringify(response),
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Mode': "CORS"
              }
            }).then(response => response.json())
            .then(data => { callback(data) }
            );
        }




  export function readResponse(id, callback) {
    fetch('/responses/' + id,
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

        