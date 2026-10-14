import Qualification from '../models/qualifications.js';
// Get all qualifications
export const getQualifications = async (req, res) => {
    try {
        const qualifications = await Qualification.find();
        res.status(200).json(qualifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a qualification by ID
export const getQualificationById = async (req, res) => {
    try {
        const qualification = await Qualification.findById(req.params.id);
        if (!qualification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }
        res.status(200).json(qualification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new qualification
export const createQualification = async (req, res) => {
    try {
        const qualification = new Qualification(req.body);
        await qualification.save();
        res.status(201).json(qualification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a qualification by ID
export const updateQualification = async (req, res) => {
    try {
        const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!qualification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }
        res.status(200).json(qualification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a qualification by ID
export const deleteQualification = async (req, res) => {
    try {
        const qualification = await Qualification.findByIdAndDelete(req.params.id);
        if (!qualification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }
        res.status(200).json({ message: 'Qualification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all qualifications
export const deleteAllQualifications = async (req, res) => {
    try {
        await Qualification.deleteMany();
        res.status(200).json({ message: 'All qualifications deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
