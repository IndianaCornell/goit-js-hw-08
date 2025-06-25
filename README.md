### Task 1 - SimpleLightbox library
Do this task in the 01-gallery.html and 01-gallery.js files. Break it down into several subtasks:

- Add the SimpleLightbox library as a project dependency using npm (the CDN link from your past work is no longer needed).
- Use your JavaScript code from the previous homework, but refactor it given that the library was installed via npm (import/export syntax).
- In order to add the CSS code of the library to the project, you need to add one more import, aside from the one described in the documentation.

```js
// Described in documentation;
import SimpleLightbox from "simplelightbox";
// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";
```

---

### Task 2 - video player
In HTML, there is <iframe> with video for Vimeo player. Write a script that will save the current video playback time to local storage and, upon page reload, continue to play the video from that time.

```html
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
```

Do this task in the 02-video.html and 02-video.js files. Break it down into several subtasks:

- Check out the documentation of the Vimeo player library.
- Add the library as a project dependency via npm.
- Initialize the player in the script file as described in the pre-existing player section, but note that you have added the player as an npm package, not via CDN.
- Read the documentation of the on() method and start tracking the timeupdate event - playback time update.
- Save playback time to local storage. Let the key for the storage be the "videoplayer-current-time" string.
- When reloading the page, use the setCurrentTime() method to resume playback from the saved position.
- Add the lodash.throttle library to the project and make sure that the playback time is updated in the storage once a second or less frequent.

---

### Task 3 - feedback form
In HTML, there is form markup. Write a script that will save field values to local storage when the user types something.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Do this task in the 03-feedback.html and 03-feedback.js files. Break it down into several subtasks:

- Track the input event on the form, and each time write to local storage an object with the email and message fields, in which you save the current values of the form fields. Let the key for the storage be the "feedback-form-state" string.
- When loading the page, check the state of the storage, and if it stores some data, use it to fill in the form fields. Otherwise, the fields must be empty.
- When submitting the form, clear the storage and form fields, and also display the object with the email and message fields and their current values in the console.
- Make sure that the storage is updated no more than once every 500 milliseconds. To do this, add to the project and use the lodash.throttle library.
