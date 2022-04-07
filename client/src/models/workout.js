//* Model classes - try to do some mapping between Models and mongoose Schemas
//#region 
class User {
  constructor(id, email, password, name, unit, height, weight, gender) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.unit = unit;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }
}

class UserWorkout {
  constructor(id, userId, unit, date, elapsedTime, bodySections, bodyParts, exercises) {
    this.id = id;
    this.userId = userId;
    this.unit = unit;
    this.date = date;
    this.elapsedTime = elapsedTime;
    this.bodySections = bodySections;
    this.bodyParts = bodyParts;
    this.exercises = exercises;
  }
}

class ExerciseBase {
  constructor(name, bodySection, bodyPart, description) {
    this.name = name;
    this.bodySection = bodySection;
    this.bodyPart = bodyPart;
    this.description = description;
  }
}

class UserExercise extends ExerciseBase {
  constructor(name, bodySection, bodyPart, description, sets) {
    super(name, bodySection, bodyPart, description);

    this.sets = sets;
  }
}

class ExerciseSet {
  constructor(repetitions, weight) {
    this.repetitions = repetitions;
    this.weight = weight;
  }
}
//#endregion

//* Scenario: User logs a workout
//! Warning: not all code is 100% correct, this is an ad hoc example
//#region

//? Pretend we're in a WorkoutComponent React function component for this scenario

const newWorkout = new UserWorkout("GUID", "This userId", "lbs", new Date(), null, null, null, null);
const workoutExercises = [];

const saveExercise = (exercise) => {
  workoutExercises.push(exercise);
}

//? exerciseModel is chosen from a list of available exercises fetched from the DB
<div>
  <ExerciseComponent model={exerciseModel} onSaveExercise={saveExercise} />
</div>

export const ExerciseComponent = ({ model, onUpdateExercise }) => {
  const ex = new UserExercise(
    model.name,
    model.bodySection,
    model.bodyPart,
    model.description,
    null
  );

  const exerciseSets = [];

  const newSet = () => {
    const set = new ExerciseSet(null, null);
    exerciseSets.push(set);
  }

  const onUpdateSet = (index, weight, repetions) => {
    const set = new ExerciseSet(weight, repetions);

    const deleted = exerciseSets.splice(index, 1, set);

    ex.sets = exerciseSets;
    
    onUpdateExercise(ex);
  }

  return (
    <div>
      {
        exerciseSets.map((set, index) => {
          return (
            <div>
              <Set set={set} onUpdateSet={onUpdateSet} index={index} />
            </div>
          );
        })
      }
      <button onClick={newSet}>Add another set</button>
    </div>
  )
}

export const Set = ({ set, onUpdateSet, index }) => {
  const [weight, setWeight] = useState(set.weight);
  const [repetions, setRepetions] = useState(set.repetions);

  const onWeightChange = (e) => {
    const updatedWeight = e.target.value;
    setWeight(updatedWeight);

    onUpdateSet(index, updatedWeight, set.repetions);
  }

  const onRepetitionsChange = (e) => {
    const updatedRepetitions = e.target.value;
    setRepetions(updatedRepetitions);
    
    onUpdateSet(index, set.weight, updatedRepetitions);
  }
  
  return (
    <div>
      <label>Weight</label>
      <input onChange={onWeightChange} value={weight} />

      <label>Weight</label>
      <input onChange={onRepetitionsChange} value={repetions} />
      <span onClick={deleteSet}> [X] </span>
    </div>
  )
}
//#endregion