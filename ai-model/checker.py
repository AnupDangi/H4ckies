from flask import Flask, request, jsonify
import h2o
from h2o.automl import H2OAutoML
import pandas as pd

# Initialize H2O and load the saved model
h2o.init()
model = h2o.load_model(r"C:\Users\Asifa Bandulal Beed\druginteraction_predictionml\ai-model\drug_interaction_aml_model\StackedEnsemble_BestOfFamily_1_AutoML_1_20241115_120503")

# Load dataset for validation and reference
valid_drugs = pd.read_csv(r"C:\Users\Asifa Bandulal Beed\druginteraction_predictionml\data\drug_interactions_dataset.csv")
valid_drug_a = set(valid_drugs['Drug A'].unique())
valid_drug_b = set(valid_drugs['Drug B'].unique())

app = Flask(__name__)

# Add a test endpoint to confirm the server is running
@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "Server is running!"})

def validate_input(drug_a, drug_b):
    if drug_a not in valid_drug_a:
        return False, f"Drug A '{drug_a}' is not recognized."
    if drug_b not in valid_drug_b:
        return False, f"Drug B '{drug_b}' is not recognized."
    return True, ""

def get_interaction_info(drug_a, drug_b):
    # Search for the row matching both drugs in the dataset
    match = valid_drugs[(valid_drugs['Drug A'] == drug_a) & (valid_drugs['Drug B'] == drug_b)]
    if not match.empty:
        interaction_type = match.iloc[0]['Interaction Type']
        side_effects = match.iloc[0]['Side Effects']
        alternatives = match.iloc[0]['Alternatives']
        return {
            "interaction_type": interaction_type,
            "side_effects": side_effects,
            "alternatives": alternatives
        }
    else:
        return {
            "interaction_type": "Unknown",
            "side_effects": "Unknown",
            "alternatives": "Unknown"
        }

@app.route('/predict_risk', methods=['POST'])
def predict_risk():
    # Parse JSON data
    content = request.get_json()

    # Validate input fields
    drug_a = content.get('drug_a')
    drug_b = content.get('drug_b')
    if not drug_a or not drug_b:
        return jsonify({"error": "Both 'drug_a' and 'drug_b' are required."}), 400

    is_valid, validation_message = validate_input(drug_a, drug_b)
    if not is_valid:
        return jsonify({"error": validation_message}), 400

    # Prepare data for prediction
    input_data = h2o.H2OFrame([{"Drug A": drug_a, "Drug B": drug_b}])

    # Predict with H2O model
    prediction = model.predict(input_data)

    # Get interaction information from the dataset
    interaction_info = get_interaction_info(drug_a, drug_b)

    # Response structure with dynamic data
    return jsonify({
        "risk_level": prediction.as_data_frame().iloc[0, 0],
        "interaction_info": interaction_info
    })

if __name__ == "__main__":
    app.run(debug=True, port=5001)