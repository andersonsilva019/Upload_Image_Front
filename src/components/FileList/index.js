import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink} from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles'

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"/>
        <div>
          <strong>profile.png</strong>
          <span>64Kb <button onClick={() => {}}>Excluir</button></span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar 
          styles={{
            root: { width: 24 },
            path: { stroke: '#7159c1'}
          }}
          strokeWidth={10}
          percentage={60}
        />

        <a 
          href="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          target="_black"
          rel=" nooperner noreferrer"
        >
          <MdLink style={{ marginRight: 8}} size={24} color="#222"/>
        </a>

        <MdCheckCircle size={24} color="#78e5d5"/>
        <MdError size={24} color="#e57878"/>
      </div>

    </li>
  </Container>
)

export default FileList;