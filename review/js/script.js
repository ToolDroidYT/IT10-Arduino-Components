window.COMPONENTS = [
    {
        name: 'Arduino UNO R3 Controller Board',
        image: '../images/01_controller_board.jpg',
        description:
            'The controller board runs the project program and sends signals to connected parts.',
        used: 'Running the project code and controlling connected parts.',
        example: 'Use it to read a water sensor and switch on a pump.',
    },
    {
        name: 'USB-A to USB-B Cable',
        image: '../images/02_usb_cable.jpg',
        description:
            'The USB cable connects the controller board to a computer or compatible power source.',
        used: 'Powering the board and sending sketches from a computer.',
        example:
            'Connect it when uploading a sketch or checking serial output.',
    },
    {
        name: '830-Point Breadboard',
        image: '../images/03_830_tie_points_breadboard.jpg',
        description:
            'A breadboard lets you build temporary circuits without soldering.',
        used: 'Building temporary circuits without soldering.',
        example: 'Build and test an LED circuit with a resistor.',
    },
    {
        name: 'Infrared Remote',
        image: '../images/04_infrared_remote.jpg',
        description:
            'The remote is a handheld infrared controller with buttons.',
        used: 'Controlling a project from a distance.',
        example: 'Press a button to switch an LED on or off.',
    },
    {
        name: '65 Jumper Wires',
        image: '../images/05_65_jumper_wires.jpg',
        description: 'Jumper wires connect components and board pins.',
        used: 'Connecting parts to the board and breadboard.',
        example: 'Connect a sensor’s power, ground, and signal pins.',
    },
    {
        name: '28BYJ-48 Stepper Motor',
        image: '../images/06_stepper_motor_28byj48.jpg',
        description: 'A stepper motor rotates in small, controlled steps.',
        used: 'Turning a part in small, precise steps.',
        example: 'Move a small model gate in controlled steps.',
    },
    {
        name: 'SG90 Servo Motor',
        image: '../images/07_servo_motor_sg90.jpg',
        description: 'A servo motor moves its output shaft to a chosen angle.',
        used: 'Moving an arm or part to a chosen angle.',
        example: 'Open and close a small model barrier.',
    },
    {
        name: '1602 I2C LCD',
        image: '../images/08_lcd1602_i2c.jpg',
        description:
            'The 1602 I2C LCD is a character display that can show up to 16 characters on each of two lines.',
        used: 'Showing messages and readings.',
        example: 'Show a sensor reading or welcome message.',
    },
    {
        name: 'ULN2003 Stepper Motor Driver',
        image: '../images/09_uln2003_stepper_driver.jpg',
        description:
            'The ULN2003 board helps control a small unipolar stepper motor.',
        used: 'Driving a compatible stepper motor.',
        example: 'Control the 28BYJ-48 stepper motor.',
    },
    {
        name: 'MB102 Breadboard Power Supply',
        image: '../images/10_breadboard_power_supply_mb102.jpg',
        description:
            'The power supply module provides regulated power to breadboard rails.',
        used: 'Providing power to breadboard circuits.',
        example: 'Power a low-voltage sensor circuit on a breadboard.',
    },
    {
        name: 'KY-023 Joystick Module',
        image: '../images/11_joystick_module_ky023.jpg',
        description:
            'A joystick module provides two-axis movement input and often includes a push-button switch.',
        used: 'Giving a project two-axis movement input.',
        example: 'Use the stick to steer a servo or move through a menu.',
    },
    {
        name: '4×4 Membrane Keypad',
        image: '../images/12_membrane_keypad_4x4.jpg',
        description:
            'A membrane switch module is a flat keypad made of several pressable buttons.',
        used: 'Entering numbers or commands.',
        example: 'Enter a PIN for a simple electronic lock.',
    },
    {
        name: 'Water-Level Sensor Module',
        image: '../images/13_water_level_sensor.jpg',
        description: 'This sensor detects water at its exposed sensing tracks.',
        used: 'Detecting water level.',
        example: 'Light an LED when water reaches a set level.',
    },
    {
        name: 'KY-038 Sound Sensor Module',
        image: '../images/14_sound_sensor_ky038.jpg',
        description: 'The sound sensor detects sound using a microphone.',
        used: 'Detecting sound.',
        example: 'Turn on an LED when the sensor detects a clap.',
    },
    {
        name: 'Fan Blade',
        image: '../images/15_fan_blade.jpg',
        description: 'A fan blade moves air when it rotates.',
        used: 'Moving air when attached to a motor.',
        example: 'Attach it to a motor to make a small fan.',
    },
    {
        name: 'Single-Digit 7-Segment Display',
        image: '../images/16_seven_segment_one_digit.jpg',
        description:
            'A one-digit 7-segment display shows numbers using seven individual LED segments.',
        used: 'Displaying one digit.',
        example: 'Display a counter from 0 to 9.',
    },
    {
        name: 'Four-Digit 7-Segment Display',
        image: '../images/17_seven_segment_four_digit.jpg',
        description:
            'A four-digit 7-segment display shows four numeric digits in one module.',
        used: 'Displaying several digits.',
        example: 'Show a timer or score.',
    },
    {
        name: 'HC-SR04 Ultrasonic Sensor',
        image: '../images/18_ultrasonic_sensor_hcsr04.jpg',
        description:
            'An ultrasonic sensor measures distance using high-frequency sound waves.',
        used: 'Measuring distance to an object.',
        example: 'Light an indicator when an object gets close.',
    },
    {
        name: 'DHT11 Temperature and Humidity Sensor',
        image: '../images/19_dht11_sensor_module.jpg',
        description:
            'The DHT11 measures surrounding temperature and relative humidity.',
        used: 'Measuring temperature and humidity.',
        example: 'Show room readings on an LCD.',
    },
    {
        name: '10 kΩ Potentiometer',
        image: '../images/20_potentiometer_10k.jpg',
        description:
            'A 10K potentiometer is an adjustable resistor with three terminals.',
        used: 'Adjusting an electrical setting.',
        example: 'Adjust LED brightness or set a threshold.',
    },
    {
        name: 'VS1838B Infrared Receiver',
        image: '../images/21_ir_receiver_vs1838b.jpg',
        description:
            'An infrared receiver detects coded infrared light signals, such as those sent by a compatible remote.',
        used: 'Receiving commands from an infrared remote.',
        example: 'Change a project mode with remote-control buttons.',
    },
    {
        name: '3–6 V DC Motor',
        image: '../images/22_dc_motor_3_6v.jpg',
        description:
            'A small 3–6 V DC motor converts electrical power into spinning motion.',
        used: 'Creating continuous spinning motion.',
        example: 'Spin a small wheel or fan.',
    },
    {
        name: '5 V Relay Module',
        image: '../images/23_relay_5v_module.jpg',
        description:
            'A relay is an electrically controlled switch; this module uses a 5 V coil.',
        used: 'Switching another circuit electronically.',
        example: 'Switch a suitable low-voltage lamp.',
    },
    {
        name: 'Female-to-Male Dupont Wires',
        image: '../images/24_dupont_female_to_male_wires.jpg',
        description:
            'Female-to-male Dupont wires connect a female socket at one end to a male pin at the other.',
        used: 'Making removable wire connections.',
        example: 'Connect a module to a breadboard or board header.',
    },
    {
        name: '9 V Battery-to-DC Connector',
        image: '../images/25_9v_battery_to_dc_connector.jpg',
        description:
            'This connector links a 9 V battery to a compatible DC power input.',
        used: 'Connecting a 9 V battery to a compatible power input.',
        example: 'Power a compatible project designed for a 9 V input.',
    },
    {
        name: 'SW-520D Tilt Switch',
        image: '../images/26_tilt_sensor_sw520d.jpg',
        description:
            'A tilt switch detects a change in orientation or inclination.',
        used: 'Detecting tilt or movement.',
        example: 'Trigger an alert when a model is tilted.',
    },
    {
        name: 'L293D Motor Driver',
        image: '../images/27_l293d_motor_driver_ic.jpg',
        description: 'The L293D is a dual H-bridge motor driver chip.',
        used: 'Controlling motor direction.',
        example: 'Make a small robot move forward and backward.',
    },
    {
        name: '74HC595 Shift Register',
        image: '../images/28_74hc595_shift_register.jpg',
        description:
            'The 74HC595 is an 8-bit serial-in, parallel-out shift register.',
        used: 'Adding more digital outputs with fewer board pins.',
        example: 'Control several LEDs using only a few board pins.',
    },
    {
        name: 'Active Buzzer',
        image: '../images/29_active_buzzer.jpg',
        description: 'An active buzzer makes a tone when powered correctly.',
        used: 'Making a simple sound alert.',
        example: 'Sound an alert when a sensor detects a condition.',
    },
    {
        name: 'Passive Buzzer',
        image: '../images/30_passive_buzzer.jpg',
        description: 'A passive buzzer needs a changing signal to make a tone.',
        used: 'Playing tones controlled by the board.',
        example: 'Play different beeps for menu choices.',
    },
    {
        name: 'Small Push-Button',
        image: '../images/31_small_tactile_button.jpg',
        description: 'A small push-button is active only while pressed.',
        used: 'Providing a press-to-activate input.',
        example: 'Start a timer or select a menu option.',
    },
    {
        name: 'Photoresistor (LDR)',
        image: '../images/32_photoresistor_ldr.jpg',
        description:
            'A photoresistor changes its resistance depending on the amount of light falling on it.',
        used: 'Detecting changes in light.',
        example: 'Turn on a light automatically when it gets dark.',
    },
    {
        name: 'NTC Thermistor',
        image: '../images/33_thermistor_ntc.jpg',
        description:
            'A thermistor is a resistor whose resistance changes with temperature.',
        used: 'Detecting changes in temperature.',
        example: 'Make a temperature warning indicator.',
    },
    {
        name: 'PN2222A NPN Transistor',
        image: '../images/34_transistor_pn2222a.jpg',
        description:
            'The PN2222 is an NPN transistor that can act as a switch or amplifier.',
        used: 'Switching a load using a small control signal.',
        example: 'Switch a small buzzer or motor from a board output.',
    },
    {
        name: '1N4007 Diode',
        image: '../images/35_diode_1n4007.jpg',
        description: 'The 1N4007 is a general-purpose rectifier diode.',
        used: 'Allowing current to flow mainly in one direction.',
        example: 'Help protect a circuit from reverse current.',
    },
    {
        name: 'Red 5 mm LED',
        image: '../images/36_led_red_5mm.jpg',
        description:
            'A red LED produces red light when current flows through it.',
        used: 'Giving a project a red light indicator.',
        example: 'Show a warning or power status.',
    },
    {
        name: 'Yellow 5 mm LED',
        image: '../images/38_led_yellow_5mm.jpg',
        description:
            'A yellow LED produces yellow light when current flows through it.',
        used: 'Giving a project a yellow light indicator.',
        example: 'Show a caution or waiting status.',
    },
    {
        name: 'Green 5 mm LED',
        image: '../images/37_led_green_5mm.jpg',
        description:
            'A green LED produces green light when current flows through it.',
        used: 'Giving a project a green light indicator.',
        example: 'Show that a process is ready or complete.',
    },
    {
        name: 'Blue 5 mm LED',
        image: '../images/39_led_blue_5mm.jpg',
        description:
            'A blue LED produces blue light when current flows through it.',
        used: 'Giving a project a blue light indicator.',
        example: 'Show a status in blue.',
    },
    {
        name: 'White 5 mm LED',
        image: '../images/40_led_white_5mm.jpg',
        description: 'A white LED produces white light.',
        used: 'Providing a small white light.',
        example: 'Add a small light to a model.',
    },
    {
        name: '5 mm RGB LED',
        image: '../images/41_rgb_led_5mm.jpg',
        description:
            'An RGB LED combines red, green, and blue LEDs in one package.',
        used: 'Making several colors from one LED.',
        example: 'Show different project states with different colors.',
    },
    {
        name: 'Resistor',
        image: '../images/42_resistor_assortment.jpg',
        description:
            'A resistor limits current and creates voltage drops in an electrical circuit.',
        used: 'Limiting current in a circuit.',
        example: 'Place it in series with an LED to limit current.',
    },
];

(() => {
    const $ = (s) => document.querySelector(s);
    const grid = $('#componentGrid'),
        dialog = $('#reviewDialog');
    const stored = (() => {
        try {
            return JSON.parse(localStorage.getItem('arduinoReviewer') || '{}');
        } catch {
            return {};
        }
    })();
    let learned = new Set(stored.learned || []),
        scores = stored.scores || [],
        filter = 'all',
        searchTerm = '';
    let mode = 'flash',
        deck = [],
        position = 0,
        known = 0,
        quizScore = 0,
        quizAnswers = [],
        answered = false,
        touchX = null;
    const save = () =>
        localStorage.setItem(
            'arduinoReviewer',
            JSON.stringify({ learned: [...learned], scores }),
        );
    const pad = (n) => String(n).padStart(2, '0');
    function updateProgress() {
        const n = learned.size;
        $('#learnedCount').textContent = n;
        $('#unlearnedCount').textContent = COMPONENTS.length - n;
        $('#tabLearned').textContent = n;
        $('#tabUnlearned').textContent = COMPONENTS.length - n;
        $('#topCount').textContent = `${pad(n)} / ${pad(COMPONENTS.length)}`;
        $('#progressFill').style.width = `${(n / COMPONENTS.length) * 100}%`;
        $('.progress-track').setAttribute('aria-valuenow', n);
    }
    function render() {
        const list = COMPONENTS.map((c, i) => ({ ...c, index: i })).filter(
            (c) =>
                (filter === 'all' ||
                    (filter === 'learned') === learned.has(c.index)) &&
                `${c.name} ${c.description} ${c.used}`
                    .toLowerCase()
                    .includes(searchTerm),
        );
        grid.innerHTML = list
            .map(
                (c) =>
                    `<article class="component-card" tabindex="0" role="button" aria-label="Review ${c.name}" data-index="${c.index}"><div class="component-image"><span class="number-tag">${pad(c.index + 1)}</span>${learned.has(c.index) ? '<span class="learned-tag">Learned</span>' : ''}<img loading="lazy" src="${c.image}" alt="${c.name}"></div><div class="card-copy"><h3>${c.name}</h3><p>${c.description}</p><div class="card-meta"><span>Field note ${pad(c.index + 1)}</span><span>Open note ↗</span></div></div></article>`,
            )
            .join('');
        $('#emptyState').hidden = !!list.length;
    }
    updateProgress();
    render();
    document.querySelectorAll('.tab').forEach((btn) =>
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            filter = btn.dataset.filter;
            render();
        }),
    );
    $('#searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value.trim().toLowerCase();
        render();
    });
    document.addEventListener('keydown', (e) => {
        if (
            e.key === '/' &&
            document.activeElement.tagName !== 'INPUT' &&
            !dialog.open
        ) {
            e.preventDefault();
            $('#searchInput').focus();
        }
    });
    $('#resetProgress').addEventListener('click', () => {
        if (!learned.size && !scores.length) return;
        learned.clear();
        scores = [];
        save();
        updateProgress();
        render();
    });
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.component-card');
        if (card) startReview('flash', Number(card.dataset.index));
    });
    grid.addEventListener('keydown', (e) => {
        if (
            (e.key === 'Enter' || e.key === ' ') &&
            e.target.matches('.component-card')
        ) {
            e.preventDefault();
            startReview('flash', Number(e.target.dataset.index));
        }
    });
    document
        .querySelectorAll('[data-start]')
        .forEach((b) =>
            b.addEventListener('click', () => startReview(b.dataset.start)),
        );
    function startReview(which, startIndex) {
        mode = which;
        known = 0;
        quizScore = 0;
        position = 0;
        answered = false;
        if (mode === 'flash') {
            const pending = COMPONENTS.map((_, i) => i).filter(
                (i) => !learned.has(i),
            );
            deck =
                startIndex !== undefined ?
                    [startIndex, ...pending.filter((i) => i !== startIndex)]
                :   pending;
            if (!deck.length) deck = COMPONENTS.map((_, i) => i);
            $('#modeLabel').textContent = 'FLASHCARDS';
            $('#reviewTitle').textContent = 'A moment to recall.';
            $('#flashcard').hidden = false;
            $('#flashActions').hidden = false;
            $('#quizArea').hidden = true;
            renderFlash();
        } else {
            const indices = COMPONENTS.map((_, i) => i)
                .sort(() => Math.random() - 0.5)
                .slice(0, 10);
            deck = indices;
            quizAnswers = [];
            $('#modeLabel').textContent = 'QUICK QUIZ';
            $('#reviewTitle').textContent = 'What do you remember?';
            $('#flashcard').hidden = true;
            $('#flashActions').hidden = true;
            $('#quizArea').hidden = false;
            renderQuestion();
        }
        dialog.showModal();
    }
    function renderFlash() {
        const item = COMPONENTS[deck[position]];
        $('#flashImage').src = item.image;
        $('#flashImage').alt = item.name;
        $('#flashcard').dataset.revealed = 'false';
        $('.card-front').hidden = false;
        $('.card-back').hidden = true;
        $('#cardOrdinal').textContent = `№ ${pad(deck[position] + 1)}`;
        $('#flashName').textContent = item.name;
        $('#flashDescription').textContent = item.description;
        $('#flashUsed').textContent = item.used;
        $('#flashExample').textContent = `Example: ${item.example}`;
        $('#reviewPosition').textContent =
            `${pad(position + 1)} / ${pad(deck.length)}`;
        $('#scoreLabel').textContent = `${known} known`;
        $('#reviewProgressFill').style.width =
            `${(position / deck.length) * 100}%`;
    }
    function reveal() {
        if ($('#flashcard').dataset.revealed === 'true') return;
        $('#flashcard').dataset.revealed = 'true';
        $('.card-front').hidden = true;
        $('.card-back').hidden = false;
    }
    $('#flashcard').addEventListener('click', reveal);
    $('#flashcard').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            reveal();
        }
    });
    function markKnown(isKnown) {
        const index = deck[position];
        if (isKnown) {
            learned.add(index);
            known++;
        } else learned.delete(index);
        save();
        updateProgress();
        render();
        position++;
        if (position >= deck.length) {
            $('#reviewPosition').textContent =
                `${pad(deck.length)} / ${pad(deck.length)}`;
            $('#reviewProgressFill').style.width = '100%';
            $('#scoreLabel').textContent = `${known} known`;
            $('#reviewTitle').textContent = 'Nice work.';
            $('#flashcard').innerHTML =
                `<div class="quiz-summary"><div class="score-big">${known}<span style="font-size:25px;color:#91a9b6">/${deck.length}</span></div><h3>Cards you know</h3><p>${deck.length - known} marked for another look. Every pass counts.</p></div>`;
            $('#flashActions').hidden = true;
            return;
        }
        renderFlash();
    }
    $('#knowIt').addEventListener('click', () => markKnown(true));
    $('#dontKnow').addEventListener('click', () => markKnown(false));
    $('#flashcard').addEventListener(
        'pointerdown',
        (e) => (touchX = e.clientX),
    );
    $('#flashcard').addEventListener('pointerup', (e) => {
        if (touchX === null) return;
        const dx = e.clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 75 && mode === 'flash') markKnown(dx > 0);
    });
    function renderQuestion() {
        if (position >= deck.length) {
            scores.unshift({
                score: quizScore,
                total: deck.length,
                date: Date.now(),
            });
            scores = scores.slice(0, 20);
            save();
            $('#quizArea').innerHTML =
                `<div class="quiz-summary"><div class="score-big">${quizScore}<span style="font-size:25px;color:#91a9b6">/${deck.length}</span></div><h3>Quiz complete.</h3><p>Your score is saved. Keep the streak going.</p><button class="button button-blue" id="quizAgain">Try another round ↗</button></div>`;
            $('#quizAgain').addEventListener('click', () =>
                startReview('quiz'),
            );
            return;
        }
        answered = false;
        const item = COMPONENTS[deck[position]],
            answerMode = Math.random() < 0.5;
        const correct = answerMode ? item.name : item.used;
        const others = COMPONENTS.filter((_, i) => i !== deck[position])
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((c) => (answerMode ? c.name : c.used));
        const options = [correct, ...others].sort(() => Math.random() - 0.5);
        $('#reviewPosition').textContent =
            `${pad(position + 1)} / ${pad(deck.length)}`;
        $('#scoreLabel').textContent = `${quizScore} correct`;
        $('#reviewProgressFill').style.width =
            `${(position / deck.length) * 100}%`;
        $('#quizPrompt').textContent =
            answerMode ?
                `Which component is this? ${item.description}`
            :   `What is ${item.name} used for?`;
        $('#choices').innerHTML = options
            .map((x) => `<button class="choice">${x}</button>`)
            .join('');
        $('#quizFeedback').textContent = '';
        $('#quizFeedback').className = 'quiz-feedback';
        $('#nextQuestion').hidden = true;
        $('#choices')
            .querySelectorAll('.choice')
            .forEach((btn) =>
                btn.addEventListener('click', () => {
                    if (answered) return;
                    answered = true;
                    const right = btn.textContent === correct;
                    if (right) {
                        quizScore++;
                        learned.add(deck[position]);
                        save();
                        updateProgress();
                        render();
                    }
                    btn.classList.add(right ? 'correct' : 'wrong');
                    $('#choices')
                        .querySelectorAll('.choice')
                        .forEach((b) => {
                            if (b.textContent === correct)
                                b.classList.add('correct');
                            b.disabled = true;
                        });
                    $('#quizFeedback').textContent =
                        right ? 'Exactly right.' : `Not quite. ${correct}`;
                    $('#quizFeedback').classList.toggle('incorrect', !right);
                    $('#scoreLabel').textContent = `${quizScore} correct`;
                    $(`#nextQuestion`).hidden = false;
                }),
            );
    }
    $('#nextQuestion').addEventListener('click', () => {
        position++;
        renderQuestion();
    });
    $('#closeReview').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
    });
})();
