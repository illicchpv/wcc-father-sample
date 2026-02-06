window.addEventListener('wcc:all-components-ready', () => {
  console.log('wcc:all-components-ready');
  // const eventEmitter = document.getElementById('email');
  // console.log('eventEmitter: ', eventEmitter);
  // eventEmitter.addEventListener('wcc-input-changed', (wccEvent) => {
  //   console.log('document wccEvent.detail: ', wccEvent.detail);
  //   console.log('document wccEvent.detail.event: ', wccEvent.detail.event);
  // });

  const eventEmitter = document.getElementById('feedback');
  eventEmitter?.addEventListener('submit-feedback', (wccEvent) => {
    console.log('document wccEvent.detail: ', wccEvent.detail);
    console.log('document wccEvent.detail.event: ', wccEvent.detail.event);
    wccEvent.detail.event.preventDefault();
    const form = wccEvent.detail.form;
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      console.log('key: ', key, value);
    }
    form.reset();
    // send to server
  });
});

// {
//   const eventEmitter = document.getElementById('email');
//   console.log('eventEmitter: ', eventEmitter);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const eventEmitter = document.getElementById('email');
//   console.log('eventEmitter: ', eventEmitter);
// });