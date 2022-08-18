import React, { useRef, useState } from 'react';

function Subscribe() {
    // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null);
    // 2. Hold a message in state to handle the response from our API.
    const [message, setMessage] = useState('');

    const subscribe = async (e) => {
        e.preventDefault();

        // 3. Send a request to our API with the user's email address.
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
            // 4. If there was an error, update the message in state.
            setMessage(error);

            return;
        }

        // 5. Clear the input value and show a success message.
        inputEl.current.value = '';
        setMessage('Success! 🎉 You are now subscribed to the newsletter.');
    };

    return (
        <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div className="p-6 border border-gray-300 sm:rounded-md">
                <form onSubmit={subscribe}>
                    <label className="block mb-6" htmlFor="email-input">
                        <span className="text-gray-700">{'Email Address'}</span>
                    </label>
                    <input className="block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
                        id="email-input"
                        name="email"
                        placeholder="you@awesome.com"
                        ref={inputEl}
                        required
                        type="email"
                    />
                    <br></br>
                    <div>
                        <span className="text-gray-700">
                            {message
                                ? message
                                : `I'll only send emails when new content is posted. No spam.`}
                        </span>
                    </div>
                    <br></br>
                    <div className="mb-6">
                        <button className="h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800" type="submit">{'Subscribe'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;