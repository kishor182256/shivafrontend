import { Box, Divider, Typography } from "@material-ui/core";
import MaterialTable from 'material-table';
import { tableStyles } from "../../Styles/AddNewDocStyle";
import { useParams } from "react-router-dom";

const NewReportEntry = () => {
  const tableclasses = tableStyles();

  const params = useParams();

  const headers=[
    {
      title:"Test Parameter",
      field:"Test Parameterd",
    },
    {
      title:"Result",
      field:"Result",
      editable:'always',  //as per documentation its 'always' by default but still..
      editComponent:props=>(   //trying to create custom edit component
        <input
         type="text"
         value={props.value}
         onChange={e => props.onChange(e.target.value)}/>
     )
    },
    {
      title:"Low",field:"Low"
    },
    {
      title:"High",field:"High"
    },
    {
      title:"Reference Range",field:"Reference Range"
    }
  ]

  return (
    <div className={tableclasses.root}>
      <div className={tableclasses.body}>
        <div className={tableclasses.header}>
          <div className={tableclasses.name}>
            <div className={tableclasses.specification}>
              <Box className={tableclasses.entryMain}>
                <Box className={tableclasses.entryHeader}>
                  <Typography className={tableclasses.entryHeaderTypo}>
                    New report entry
                  </Typography>
                </Box>

                <Box className={tableclasses.patienceDetailsMain}>
                  <Box>
                    <Typography className={tableclasses.patienceFont}>
                      Lab Name:
                    </Typography>
                    <Typography className={tableclasses.patienceFont}>
                      Patient name:
                    </Typography>
                    <Typography className={tableclasses.patienceFont}>
                      Age/Sex:
                    </Typography>
                  </Box>
                  <Box className={tableclasses.patienceDetailsReport}>
                    <Typography className={tableclasses.patienceFont}>
                      Patient ID:
                    </Typography>
                    <Typography className={tableclasses.patienceFont}>
                      Sample no:
                    </Typography>
                    <Typography className={tableclasses.patienceFont}>
                      Report/Test:
                    </Typography>
                  </Box>
                  <Box className={tableclasses.patienceDetailstime}>
                    <Typography className={tableclasses.patienceFont}>
                      Sample From:
                    </Typography>
                    <Typography className={tableclasses.patienceFont}>
                      Entry Date:
                    </Typography>
                  </Box>
                </Box>

                <Box style={{ margingTop: "30px !important" }}>
                  <MaterialTable
                    columns={headers}
                    // data={rows}
                    // icons={tableIcons}
                    editable={{}}
                    options={{
                      search: false,
                      //padding:"dense",
                      paging: false,
                      // addRowPosition:"first",
                      // actionsColumnIndex:-1,
                      sorting: false,
                      exportButton: false,
                      rowStyle: {
                        fontSize: "10px",
                        padding: 0,
                        textAlign: "center",
                      },
                    }}
                  />
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReportEntry;
