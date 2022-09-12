import {Platform} from 'react-native';

export const httpPost = async (
  method,
  payload,
  loadingText = null,
  sendHeaders = false,
) => {
  let url =
    'https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/' + methodName;
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    headers['x-api-key'] = 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch';

    // Get request log ID
    let res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    const resJson = res.json();

    return resJson;
  } catch (e) {
    logError('Exception', e);
    logEvent(fcm_events.error, {error: e});
    loadingText != null && store.dispatch(endLoading());

    return getResErrorObject(I18n.t('errors.networkError'));
  }

};

async function httpGet(methodName, params, loadingText = null, method = 'GET') {
  return new Promise(function (resolve, reject) {
    let url =
      'https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/' +
      methodName;

    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      headers['x-api-key'] = 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch';

      fetch('url', {
        method: 'GET',
        headers: headers,
      })
        .then(response => {
          resolve(response.json());
        })
        //If response is in json then in success
        .then(responseJson => {
          //Success

          console.log(responseJson);
          reject(JSON.stringify('Error'));
        })
        //If response is not in json then in error
        .catch(error => {
          //Error
          console.error(error);
          reject(JSON.stringify('Error'));
        });

      // return resJson;
    } catch (e) {
      console.error(error);
      reject(JSON.stringify('Error'));
    }
  });
}

export {httpGet};
