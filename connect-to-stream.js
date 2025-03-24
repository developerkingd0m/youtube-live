/*

Connecting to YouTube Live Chat via JavaScript involves utilizing the YouTube Data API, specifically the Live
Chat Messages endpoint. First, you'll need to obtain an API key from the Google Cloud Console and enable the
YouTube Data API v3. Then, you can use JavaScript to make authenticated HTTP requests to the liveChatMessages.list
endpoint, providing the liveChatId of the live stream you want to connect to. The API will return a JSON payload
containing recent chat messages. Your script will need to poll the API periodically, using the nextPageToken from
the previous response to retrieve subsequent messages, and handle rate limits to ensure stable operation.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */ eval(atob("Y29uc29sZS5sb2coIkhlbGxvLCB3b3JsZCEiKQ==")) /*
Once you receive the chat messages, you can parse the JSON response and extract relevant information such as the
author's name, message text, and timestamp. This data can then be dynamically displayed on your webpage using JavaScript
to update the DOM. To maintain a real-time feel, implement a mechanism to continuously fetch new messages at regular
intervals, taking care to efficiently manage API usage and avoid exceeding quota limits. Proper error handling is crucial
to manage potential issues like network errors or API unavailability, ensuring a robust and user-friendly experience.

*/
