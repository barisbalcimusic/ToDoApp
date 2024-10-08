export const postData = async (title, content) => {
  try {
    const res = await fetch("https://betterdo.onrender.com/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    if (!res.ok) throw new Error("Fetch failed (postData)");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
