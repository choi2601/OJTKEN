import * as Style from './AlertFormStyle';
import SignalCellularNodataIcon from '@mui/icons-material/SignalCellularNodata';

function AlertForm() {
  return (
    <Style.AlertFromWrapper>
      <SignalCellularNodataIcon style={{ width: '120px', height: '120px', color: '#adb5bd' }} />
      <Style.AlertInfo sort="Roboto-Bold">No Data</Style.AlertInfo>
    </Style.AlertFromWrapper>
  );
}

export default AlertForm;
