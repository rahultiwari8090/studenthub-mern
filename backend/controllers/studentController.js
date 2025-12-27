const Student = require("../models/Student");

// ➕ Create Student
exports.createStudent = async (req, res) => {
  try {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
      return res.status(400).json({ message: "All fields required" });
    }

    const student = await Student.create({
      name,
      email,
      course,
      createdBy: req.user._id,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Get Students (Admin = all, User = own)
exports.getStudents = async (req, res) => {
  try {
    let students;

    if (req.user.role === "admin") {
      students = await Student.find().populate("createdBy", "name email");
    } else {
      students = await Student.find({ createdBy: req.user._id });
    }

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏ Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // User apna hi student update kar sakta hai
    if (
      req.user.role !== "admin" &&
      student.createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    student.course = req.body.course || student.course;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (
      req.user.role !== "admin" &&
      student.createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    await student.deleteOne();
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
