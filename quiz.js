document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab the subject from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');

    // 2. The Question Database
    const database = {
        python: [
            // 20 MCQs
            { q: "What is the correct file extension for Python files?", options: [".pt", ".py", ".python", ".txt"], ans: 1 },
            { q: "Which operator is used for floor division?", options: ["/", "%", "//", "**"], ans: 2 },
            { q: "How do you access the very last element of a list named `arr`?", options: ["arr[last]", "arr[-1]", "arr[0]", "arr.end()"], ans: 1 },
            { q: "Which built-in function asks the user to type something into the console?", options: ["input()", "get_user()", "read()", "console.in()"], ans: 0 },
            { q: "What will `print('Hi' * 3)` output?", options: ["Hi Hi Hi", "Hi3", "HiHiHi", "Error"], ans: 2 },
            { q: "Which Python collection is unordered and does NOT allow duplicate values?", options: ["List", "Dictionary", "Tuple", "Set"], ans: 3 },
            { q: "How do you check if the letter 'a' is inside the string 'apple'?", options: ["'a' inside 'apple'", "'a' in 'apple'", "contains('a', 'apple')", "'apple'.has('a')"], ans: 1 },
            { q: "Which keyword is used to stop a loop completely and move to the next block of code?", options: ["stop", "return", "break", "exit"], ans: 2 },
            { q: "How do you add a new element to an existing set named `my_set`?", options: ["my_set.append()", "my_set.add()", "my_set.insert()", "my_set.push()"], ans: 1 },
            { q: "What is the output of `bool(0)`?", options: ["True", "False", "None", "Error"], ans: 1 },
            { q: "How do you create a completely empty list?", options: ["list = {}", "list = ()", "list = []", "list = empty"], ans: 2 },
            { q: "What does the `len()` function return when used on a string?", options: ["Memory size", "Word count", "Character count", "Vowel count"], ans: 2 },
            { q: "Which keyword is used to define a custom function?", options: ["func", "define", "create", "def"], ans: 3 },
            { q: "What does `3 ** 2` evaluate to in Python?", options: ["6", "9", "1", "1.5"], ans: 1 },
            { q: "Which method is used to convert all characters in a string to uppercase?", options: ["up()", "upper()", "capitalize()", "to_upper()"], ans: 1 },
            { q: "Which keyword is used to catch and handle errors in a `try` block?", options: ["catch", "handle", "except", "error"], ans: 2 },
            { q: "What is the output of `type([])`?", options: ["<class 'set'>", "<class 'list'>", "<class 'tuple'>", "<class 'dict'>"], ans: 1 },
            { q: "Which is the correct way to start a `for` loop that runs 5 times?", options: ["for i in range(5):", "for i = 1 to 5:", "loop 5 times:", "for (i=0; i<5; i++):"], ans: 0 },
            { q: "How do you remove a specific key-value pair from a dictionary named `data` using its key?", options: ["data.remove('key')", "del data['key']", "data.delete('key')", "drop data['key']"], ans: 1 },
            { q: "Which is a valid boolean value in Python?", options: ["true", "TRUE", "True", "T"], ans: 2 },

            // 10 T/F
            { q: "Python requires a semicolon (;) at the end of every statement.", options: ["True", "False"], ans: 1 },
            { q: "A tuple can be modified (elements added or removed) after it is created.", options: ["True", "False"], ans: 1 },
            { q: "The expression `10 == '10'` evaluates to True in Python.", options: ["True", "False"], ans: 1 },
            { q: "The `int()` function can convert the string '3.14' directly into an integer without throwing an error.", options: ["True", "False"], ans: 1 },
            { q: "Lists in Python use zero-based indexing, meaning the first element is at index 0.", options: ["True", "False"], ans: 0 },
            { q: "A `while` loop will execute indefinitely if its condition never becomes False.", options: ["True", "False"], ans: 0 },
            { q: "You can use either single quotes (' ') or double quotes (\" \") to define a string in Python.", options: ["True", "False"], ans: 0 },
            { q: "The `def` keyword is used to create a new variable.", options: ["True", "False"], ans: 1 },
            { q: "Dictionaries store data in key-value pairs.", options: ["True", "False"], ans: 0 },
            { q: "Code written after a `#` symbol on a single line is ignored by the Python interpreter.", options: ["True", "False"], ans: 0 }
        ],
        ml: [
            // 20 MCQs
            { q: "What is the primary goal of Machine Learning?", options: ["Writing hard-coded rules", "Enabling computers to learn from data", "Building computer hardware", "Designing user interfaces"], ans: 1 },
            { q: "Which of the following is a main type of Machine Learning?", options: ["Supervised Learning", "Database Management", "Cloud Computing", "Version Control"], ans: 0 },
            { q: "In Supervised Learning, the training data must include:", options: ["Only inputs", "Labels (outputs) corresponding to inputs", "Only numerical values", "Code snippets"], ans: 1 },
            { q: "Predicting the price of a house based on its size is an example of:", options: ["Classification", "Clustering", "Regression", "Dimensionality Reduction"], ans: 2 },
            { q: "Categorizing an email as 'Spam' or 'Not Spam' is an example of:", options: ["Regression", "Classification", "Clustering", "Reinforcement Learning"], ans: 1 },
            { q: "What is Unsupervised Learning?", options: ["Learning with labeled data", "Learning by trial and error", "Finding hidden patterns in unlabeled data", "Learning from a teacher"], ans: 2 },
            { q: "Grouping customers into segments based on their purchasing behavior is called:", options: ["Regression", "Classification", "Clustering", "Overfitting"], ans: 2 },
            { q: "What does 'Overfitting' mean in Machine Learning?", options: ["The model performs poorly on training data", "The model memorizes training data but fails on new data", "The model is too simple", "The dataset is too large"], ans: 1 },
            { q: "What is the purpose of the 'Testing Set'?", options: ["To train the model", "To evaluate how well the model generalizes to new data", "To clean the data", "To define the features"], ans: 1 },
            { q: "What is a 'Feature' in a dataset?", options: ["An individual measurable property or variable", "The final prediction", "The algorithm used", "The total number of rows"], ans: 0 },
            { q: "Which algorithm is commonly used for basic classification tasks?", options: ["Linear Regression", "Logistic Regression", "K-Means", "PCA"], ans: 1 },
            { q: "Which of the following is NOT a Machine Learning algorithm?", options: ["Decision Tree", "Support Vector Machine", "HTML5", "Random Forest"], ans: 2 },
            { q: "What does 'Underfitting' mean?", options: ["The model is too complex", "The model captures the data perfectly", "The model is too simple and performs poorly on all data", "The model only works on test data"], ans: 2 },
            { q: "In k-Means clustering, what does 'k' represent?", options: ["The number of features", "The number of clusters to form", "The learning rate", "The number of iterations"], ans: 1 },
            { q: "Which metric is commonly used to evaluate a classification model?", options: ["Mean Squared Error", "R-squared", "Accuracy", "Sum of Squared Residuals"], ans: 2 },
            { q: "What is Reinforcement Learning based on?", options: ["Labeled datasets", "Unlabeled text", "Rewarding desired behaviors and punishing negative ones", "Sorting algorithms"], ans: 2 },
            { q: "What is the process of cleaning and transforming raw data called?", options: ["Data Preprocessing", "Model Deployment", "Overfitting", "Hyperparameter Tuning"], ans: 0 },
            { q: "What is the term for the target variable we are trying to predict in supervised learning?", options: ["Feature", "Label", "Cluster", "Agent"], ans: 1 },
            { q: "A Decision Tree algorithm resembles what kind of structure?", options: ["A circle", "A flowchart", "A grid", "A straight line"], ans: 1 },
            { q: "What happens if you train a model on a dataset with missing or messy data?", options: ["The model automatically fixes it", "The model achieves perfect accuracy", "Predictions will likely be poor (Garbage In, Garbage Out)", "The training happens instantly"], ans: 2 },

            // 10 True/False
            { q: "Supervised learning algorithms require labeled data.", options: ["True", "False"], ans: 0 },
            { q: "Unsupervised learning is typically used for regression tasks.", options: ["True", "False"], ans: 1 },
            { q: "A model that perfects the training data but fails on new data is underfitting.", options: ["True", "False"], ans: 1 },
            { q: "The testing set should be used to train the machine learning model.", options: ["True", "False"], ans: 1 },
            { q: "Classification models predict discrete categories or classes.", options: ["True", "False"], ans: 0 },
            { q: "Machine learning models generally improve as they are given more high-quality data.", options: ["True", "False"], ans: 0 },
            { q: "Feature extraction is an important step in data preprocessing.", options: ["True", "False"], ans: 0 },
            { q: "K-Means is an example of a supervised learning algorithm.", options: ["True", "False"], ans: 1 },
            { q: "Reinforcement learning involves an agent interacting with an environment.", options: ["True", "False"], ans: 0 },
            { q: "Splitting data into a training set and a testing set is standard practice in Machine Learning.", options: ["True", "False"], ans: 0 }
        ],
        dl: [
            // 20 MCQs
            { q: "What is Deep Learning?", options: ["A type of hardware", "A subset of Machine Learning based on artificial neural networks", "A database management system", "A web development framework"], ans: 1 },
            { q: "What biological structure inspired the design of artificial neural networks?", options: ["The human heart", "The digestive system", "The human brain", "The nervous system of an insect"], ans: 2 },
            { q: "What is the most basic building block of a neural network?", options: ["A matrix", "A node or neuron (perceptron)", "A central processing unit", "A decision tree"], ans: 1 },
            { q: "What does the 'Deep' in Deep Learning refer to?", options: ["The complexity of the math", "The amount of data used", "The presence of multiple hidden layers in the network", "The deep thoughts of the AI"], ans: 2 },
            { q: "Which layer in a neural network interacts directly with the incoming data?", options: ["Hidden layer", "Output layer", "Input layer", "Processing layer"], ans: 2 },
            { q: "What is the purpose of an Activation Function?", options: ["To store data", "To introduce non-linearity into the network", "To connect to the internet", "To delete unused nodes"], ans: 1 },
            { q: "Which of the following is a very common activation function?", options: ["ReLU (Rectified Linear Unit)", "HTML", "SQL", "Gradient Descent"], ans: 0 },
            { q: "What is the role of a 'Loss Function'?", options: ["To randomly drop data", "To measure how far off the model's predictions are from the actual labels", "To speed up the computer", "To turn off the neural network"], ans: 1 },
            { q: "What algorithm is used to adjust the weights in a neural network to minimize the loss?", options: ["K-Means", "Random Forest", "Backpropagation", "Linear Search"], ans: 2 },
            { q: "What is 'Gradient Descent'?", options: ["A type of neural network", "An optimization algorithm used to minimize the loss function", "A way to visualize data", "A data cleaning technique"], ans: 1 },
            { q: "What is an 'Epoch' in Deep Learning?", options: ["A single update to a weight", "One complete pass of the entire training dataset through the neural network", "A type of activation function", "The final prediction"], ans: 1 },
            { q: "What does CNN stand for?", options: ["Computer Neural Network", "Convolutional Neural Network", "Calculated Node Network", "Complex Neural Node"], ans: 1 },
            { q: "What are Convolutional Neural Networks (CNNs) most commonly used for?", options: ["Image recognition and processing", "Translating languages", "Sorting databases", "Predicting stock prices"], ans: 0 },
            { q: "What does RNN stand for?", options: ["Random Neural Network", "Recurrent Neural Network", "Rapid Node Network", "Relational Neural Node"], ans: 1 },
            { q: "What are Recurrent Neural Networks (RNNs) best suited for?", options: ["Image classification", "Sequential data like time series or natural language", "Basic arithmetic", "Generating random numbers"], ans: 1 },
            { q: "Why are GPUs (Graphics Processing Units) heavily used in Deep Learning?", options: ["They make the code look better", "They are excellent at performing parallel matrix multiplications rapidly", "They use less electricity", "They are required by Python"], ans: 1 },
            { q: "What are 'Weights' in a neural network?", options: ["The physical size of the computer", "Parameters that are adjusted during training to learn the data", "The number of layers in the network", "The speed of the algorithm"], ans: 1 },
            { q: "What is a common technique used to prevent overfitting in deep neural networks?", options: ["Increasing the learning rate", "Dropout (randomly turning off some neurons during training)", "Using less data", "Removing the hidden layers"], ans: 1 },
            { q: "What is 'Batch Size'?", options: ["The total size of the dataset", "The physical memory limit of the GPU", "The number of training examples processed in one iteration before updating weights", "The number of output categories"], ans: 2 },
            { q: "Which of these is a popular open-source library for Deep Learning?", options: ["Pandas", "Django", "TensorFlow", "React"], ans: 2 },

            // 10 True/False
            { q: "Deep Learning is a subset of Machine Learning.", options: ["True", "False"], ans: 0 },
            { q: "A neural network must have at least 100 hidden layers to function.", options: ["True", "False"], ans: 1 },
            { q: "Backpropagation calculates errors starting from the output layer and moving backwards to the input layer.", options: ["True", "False"], ans: 0 },
            { q: "Deep learning models generally require much more data to train effectively than traditional machine learning models.", options: ["True", "False"], ans: 0 },
            { q: "The output layer of a neural network is responsible for providing the final prediction.", options: ["True", "False"], ans: 0 },
            { q: "CNNs are primarily used for processing tabular data in spreadsheets.", options: ["True", "False"], ans: 1 },
            { q: "Setting the learning rate extremely high will always make the network learn faster and better.", options: ["True", "False"], ans: 1 },
            { q: "An epoch means the neural network has seen the entire training dataset one time.", options: ["True", "False"], ans: 0 },
            { q: "Dropout is a technique used to purposefully make the neural network memorize the training data.", options: ["True", "False"], ans: 1 },
            { q: "Data fed into a neural network usually needs to be converted into numbers (tensors or matrices) first.", options: ["True", "False"], ans: 0 }
        ]
    };

    // 3. UI Elements & State
    let currentQuestions = database[subject] || database['python']; // Fallback to python if null
    let currentQuestionIndex = 0;
    let score = 0;

    const titleEl = document.getElementById('quiz-title');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQEl = document.getElementById('current-q');
    const totalQEl = document.getElementById('total-q');
    const currentScoreEl = document.getElementById('current-score');

    const questionBox = document.getElementById('question-box');
    const resultBox = document.getElementById('result-box');

    // 4. Initialization
    if (subject === 'ml') titleEl.innerText = "Machine Learning";
    else if (subject === 'dl') titleEl.innerText = "Deep Learning";
    else titleEl.innerText = "Python Basics";

    // SHUFFLE THE QUESTIONS HERE
    shuffleArray(currentQuestions);

    totalQEl.innerText = currentQuestions.length;
    loadQuestion();

    // 5. Functions
    function loadQuestion() {
        const qData = currentQuestions[currentQuestionIndex];
        questionTextEl.innerText = qData.q;
        currentQEl.innerText = currentQuestionIndex + 1;

        optionsContainer.innerHTML = ''; // Clear old options

        qData.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerText = option;
            btn.onclick = () => handleAnswer(index);
            optionsContainer.appendChild(btn);
        });
    }

    function handleAnswer(selectedIndex) {
        const correctIndex = currentQuestions[currentQuestionIndex].ans;
        if (selectedIndex === correctIndex) {
            score++;
            currentScoreEl.innerText = score;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionBox.classList.add('hidden');
        resultBox.classList.remove('hidden');
        document.getElementById('score').innerText = score;
        document.getElementById('total-score').innerText = currentQuestions.length;
    }

    // 6. Return Home Buttons
    document.getElementById('home-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('quit-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // 7. Utility: Shuffle Array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});