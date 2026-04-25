export default function Form({ data, setData }) {
  return (
    <form className="form">
      <fieldset>
        <legend> news card (info) </legend>

        <label id="image">
          Choose Background:
          <input
            type="file"
            accept=".png, .jpeg, .jpg"
            // ERROR : image can't be exported with html-to-image with blobURL, hence, it's need to be converted to base64 first.
            // use file reader here, instead of blobUrl
            // bloburl is just used to preview things, it dosen't read the whole file but makes a temporary pointer to it, which is causing the error.

            onChange={(e) => {
              const fileObject = e.target.files[0];
              if (!fileObject) return;

              const reader = new FileReader(); // create a file reader
              reader.onload = () => {
                // callback function to run after the file has been fully read (async) operation
                // setImage(reader.result); // update image state
                setData((prev) => ({
                  ...prev,
                  cover: reader.result,
                }));
              };
              reader.readAsDataURL(fileObject); // read the file as data url
            }}
          />
        </label>

        <label id="news">
          NEWS :
          <textarea
            placeholder="here goes Lyrics..."
            rows="3"
            value={data.news}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                news: e.target.value,
              }))
            }
          />
        </label>

        <label id="caption">
          Caption
          <input
            type="text"
            placeholder="enter sub-caption"
            value={data.caption}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                caption: e.target.value,
              }))
            }
          />
        </label>
      </fieldset>
    </form>
  );
}
