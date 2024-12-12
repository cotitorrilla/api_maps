import Map from "../models/mapModel.js";

const getAllMaps = async (req, res, next) => {
  try {
    const maps = await Map.getAllMaps();
    res.status(200).json(maps);
  } catch (error) {
    next(error);
  }
};

const getMapById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const map = await Map.getMapById(id);

    if (!map) {
      return res.status(400).json({ error: "Map not found" });
    }
    res.status(200).json(map);
  } catch (error) {
    next(error);
  }
};

const addMap = async (req, res, next) => {
  const { country, province, autor, scale, format } = req.body;
  try {
    if (!country || !province || !autor || !scale || !format) {
      return res.status(400).json({
        status: 400,
        error:
          "All fields (country, province, autor, scale, format) are required.",
      });
    }

    const newMap = await Map.addMap({
      country,
      province,
      autor,
      scale,
      format,
    });

    if (!newMap) {
      return res.status(400).json({
        status: 400,
        error: "Failed to create map. Please try again.",
      });
    }

    res.status(201).json(newMap);
  } catch (error) {
    next(error);
  }
};

const updateMap = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedMap = await Map.updateMap(id, updateData);

    if (!updatedMap) {
      return res.status(404).json({
        status: 400,
        error: "Map not found.",
      });
    }

    res.status(200).json({
      message: "Map updated successfully.",
      map: updatedMap,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMap = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 400,
        error: "Map ID is required.",
      });
    }

    const deletedMap = await Map.deleteMap(id);

    if (!deletedMap) {
      return res.status(404).json({
        status: 400,
        error: "Map not found.",
      });
    }

    res.status(200).json({ message: "Map successfully deleted." });
  } catch (error) {
    next(error);
  }
};

export { getAllMaps, getMapById, addMap, updateMap, deleteMap };
