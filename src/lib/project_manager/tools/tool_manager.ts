// Copyright 2020 Teros Technology
//
// Ismael Perez Rojo
// Carlos Alberto Ruiz Naranjo
// Alfredo Saez
//
// This file is part of TerosHDL.
//
// TerosHDL is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// TerosHDL is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with TerosHDL.  If not, see <https://www.gnu.org/licenses/>.

import * as Vunit from "./vunit";
import * as Cocotb from "./cocotb";
import * as Edalize from "./edalize";
import * as Osvvm from "./osvvm";

export class Tool_manager {
    private vunit : Vunit.Vunit;
    private cocotb : Cocotb.Cocotb;
    private edalize : Edalize.Edalize;
    private osvvm : Osvvm.Osvvm;
    private edam_project_manager;
    private config_file;
    private config_reader;
    private test_list: any[] = [];

    constructor(context, output_channel, config_file, config_reader, edam_project_manager){
        this.edam_project_manager = edam_project_manager;
        this.vunit = new Vunit.Vunit(context, output_channel, edam_project_manager, config_file);
        this.osvvm = new Osvvm.Osvvm(context, output_channel, edam_project_manager, config_file, config_reader);
        this.cocotb = new Cocotb.Cocotb(context, output_channel, edam_project_manager);
        this.edalize = new Edalize.Edalize(context, output_channel, config_reader, config_file, edam_project_manager);
        this.config_file = config_file;
        this.config_reader = config_reader;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Getters
    ////////////////////////////////////////////////////////////////////////////
    get_test_list() {
        return this.test_list;
    }


    ////////////////////////////////////////////////////////////////////////////
    // Runners
    ////////////////////////////////////////////////////////////////////////////
    async find_tests(){
        let tool = this.get_tool();
        let test_list = tool.get_test_list();
        return test_list;
    }

    async run(testname, gui: boolean){
        let tool = this.get_tool();
        let result = await tool.run(testname, gui);
        return result;
    }

    stop(){
        this.vunit.stop_test();
        this.cocotb.stop_test();
        this.edalize.stop_test();
        this.osvvm.stop_test();
    }

    ////////////////////////////////////////////////////////////////////////////
    // Setters
    ////////////////////////////////////////////////////////////////////////////
    set_empty_test_list(){
        this.test_list = [];
    }

    set_loading_test_list(){
        this.test_list = [{ name: "Loading tests...", location: undefined }];
    }

    // get_rerun_testlist() {
    //     let tool = this.get_tool();
    //     let rerun_testlist = tool.get_rerun_testlist();
    //     return rerun_testlist;
    // }

    ////////////////////////////////////////////////////////////////////////////
    // Utils
    ////////////////////////////////////////////////////////////////////////////
    clear(){
        this.osvvm.clear();
        this.edalize.clear();
    }

    get_tool() {
        let selected_tool = this.config_reader.get_selected_tool();
        if (selected_tool === 'vunit') {
            return this.vunit;
        }
        else if (selected_tool === 'cocotb') {
            return this.cocotb;
        }
        else if (selected_tool === 'osvvm') {
            return this.osvvm;
        }
        else {
            return this.edalize;
        }
    }
}