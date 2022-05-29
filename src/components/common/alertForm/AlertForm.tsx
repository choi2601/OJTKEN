import * as Style from './AlertFormStyle';

function AlertForm() {
  return (
    <Style.AlertFromWrapper>
      <Style.CustomNodataIcon />
      <Style.AlertInfo sort="Roboto-Bold">No Data</Style.AlertInfo>
    </Style.AlertFromWrapper>
  );
}

export default AlertForm;
