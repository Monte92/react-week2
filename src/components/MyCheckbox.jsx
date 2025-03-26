import { useState } from 'react';
    
    export default function MyCheckbox() {
      const [liked, setLiked] = useState(false);

      function handleChange(e) {
        setLiked(e.target.checked);
      }
    
      return (
        <>
          <label>
            <input
              type="checkbox"
              checked={liked}
              onChange={handleChange}
            />
            I liked this
          </label>
          <p>You liked this.</p>
        </>
      );
    }