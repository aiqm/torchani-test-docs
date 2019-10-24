Search.setIndex({docnames:["api","examples/ase_interface","examples/cache_aev","examples/energy_force","examples/index","examples/jit","examples/load_from_neurochem","examples/neurochem_trainer","examples/nnp_training","examples/nnp_training_force","examples/nnp_training_ignite","examples/sg_execution_times","examples/vibration_analysis","index","start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","examples/ase_interface.rst","examples/cache_aev.rst","examples/energy_force.rst","examples/index.rst","examples/jit.rst","examples/load_from_neurochem.rst","examples/neurochem_trainer.rst","examples/nnp_training.rst","examples/nnp_training_force.rst","examples/nnp_training_ignite.rst","examples/sg_execution_times.rst","examples/vibration_analysis.rst","index.rst","start.rst"],objects:{"":{torchani:[13,0,0,"-"]},"torchani.AEVComputer":{forward:[0,2,1,""]},"torchani.EnergyShifter":{forward:[0,2,1,""],sae:[0,2,1,""],sae_from_dataset:[0,2,1,""],subtract_from_dataset:[0,2,1,""]},"torchani.ase":{Calculator:[0,1,1,""]},"torchani.data":{AEVCacheLoader:[0,1,1,""],BatchedANIDataset:[0,1,1,""],CachedDataset:[0,1,1,""],ShuffledDataset:[0,3,1,""],cache_aev:[0,0,0,"-"],create_aev_cache:[0,3,1,""],find_threshold:[0,3,1,""],load_ani_dataset:[0,3,1,""]},"torchani.data.CachedDataset":{load:[0,2,1,""],split:[0,2,1,""]},"torchani.ignite":{Container:[0,1,1,""],DictLoss:[0,1,1,""],DictMetric:[0,1,1,""],MSELoss:[0,3,1,""],MaxAEMetric:[0,3,1,""],PerAtomDictLoss:[0,1,1,""],RMSEMetric:[0,3,1,""],TransformedLoss:[0,1,1,""]},"torchani.ignite.Container":{forward:[0,2,1,""]},"torchani.models":{ANI1ccx:[0,1,1,""],ANI1x:[0,1,1,""]},"torchani.neurochem":{Constants:[0,1,1,""],Trainer:[0,1,1,""],load_atomic_network:[0,3,1,""],load_model:[0,3,1,""],load_model_ensemble:[0,3,1,""],load_sae:[0,3,1,""],trainer:[0,0,0,"-"]},"torchani.neurochem.Constants":{species_to_tensor:[0,4,1,""]},"torchani.neurochem.Trainer":{evaluate:[0,2,1,""],load_data:[0,2,1,""],run:[0,2,1,""]},"torchani.nn":{Gaussian:[0,1,1,""]},"torchani.optim":{AdamW:[0,1,1,""]},"torchani.utils":{ChemicalSymbolsToInts:[0,1,1,""],hessian:[0,3,1,""],map2central:[0,3,1,""],pad:[0,3,1,""],pad_atomic_properties:[0,3,1,""],present_species:[0,3,1,""],strip_redundant_padding:[0,3,1,""],vibrational_analysis:[0,3,1,""]},torchani:{AEVComputer:[0,1,1,""],ANIModel:[0,1,1,""],EnergyShifter:[0,1,1,""],Ensemble:[0,1,1,""],ase:[0,0,0,"-"],data:[0,0,0,"-"],ignite:[0,0,0,"-"],models:[0,0,0,"-"],neurochem:[0,0,0,"-"],optim:[0,0,0,"-"],utils:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"0000000e":[8,9],"0000e":9,"000ev":1,"017ev":1,"018ev":1,"01s":9,"021ev":1,"022ev":1,"023ev":1,"02s":9,"032ev":1,"035ev":1,"038ev":1,"0500000e":[8,9],"0507e":9,"0581e":12,"09it":2,"09s":9,"0fk":1,"0x7f031c062990":6,"1079e":12,"1250000e":[8,9],"1258e":12,"1284e":9,"131k":1,"1396e":12,"139k":1,"13it":7,"1586e":12,"1598449e":[8,9],"1641e":9,"165k":1,"1687500e":[8,9],"16it":8,"171k":1,"178k":1,"17it":7,"1838e":12,"18it":8,"1ccx":[0,3,5,13],"1ccx_8x":0,"1x_8x":[0,2,6,10],"2000000e":[8,9],"2000e":[8,9],"2006e":12,"20it":[7,8],"21it":[7,8],"22it":[2,7,8],"23it":[7,8],"2437500e":[8,9],"244k":1,"2467e":12,"24it":8,"250k":1,"25it":[7,8],"26it":[2,7,8],"272k":1,"27it":[7,8],"28it":[7,8],"290k":1,"291k":1,"29it":7,"2r_16":[2,6,8,10],"300k":1,"3051e":9,"3064e":12,"30it":7,"3187500e":[8,9],"31g":0,"31it":[7,8],"32it":8,"33it":8,"34it":8,"35it":8,"36it":[7,8],"3705e":12,"3744468e":[8,9],"3755e":12,"3937500e":[8,9],"3fev":1,"40it":7,"41it":7,"4261e":12,"42s":9,"4375000e":[8,9],"43it":2,"44s":9,"45s":9,"4982e":12,"49it":2,"5000e":[8,9],"50it":2,"5125000e":[8,9],"5129e":9,"5173e":12,"52it":8,"5377e":12,"53s":9,"5500000e":[8,9],"5525440e":[8,9],"5573e":9,"56s":9,"57it":8,"57s":9,"5838e":12,"5875000e":[8,9],"59it":8,"5a_a4":[2,6,8,10],"6000000e":[8,9],"6042e":12,"60it":8,"61it":[7,8],"62it":8,"6381e":12,"63it":8,"6608e":9,"6625000e":[8,9],"66it":[2,7],"67it":[7,8],"68it":7,"7062500e":[8,9],"7071e":9,"70it":8,"71it":[7,8],"72it":7,"73it":[2,8],"74it":8,"7671459e":[8,9],"7708e":12,"7806e":12,"7812500e":[8,9],"7842e":12,"78it":2,"80it":8,"8174770e":[8,9],"826ev":1,"833ev":1,"83it":8,"840ev":1,"8415e":12,"841ev":1,"843ev":1,"845ev":1,"8462e":12,"846ev":1,"8500000e":[8,9],"854ev":1,"8562500e":[8,9],"857ev":1,"858ev":1,"85it":2,"863ev":1,"867ev":1,"868ev":1,"877ev":1,"878ev":1,"87it":7,"880ev":1,"885ev":1,"886ev":1,"8890e":12,"8904862e":[8,9],"8921e":12,"89it":7,"903ev":1,"9268e":12,"9297e":9,"9312500e":[8,9],"93it":[2,7],"9452431e":[8,9],"94s":9,"9634954e":[8,9],"9703e":12,"9750000e":[8,9],"97it":7,"99it":7,"boolean":0,"break":[8,9],"case":[0,1,9],"class":[0,8,9,13],"const":[0,6,10],"default":[0,8,9],"final":[6,8,10],"float":0,"function":[0,1,8,9],"import":[1,2,3,5,6,7,8,9,10,12,13],"int":0,"long":0,"new":[8,9],"public":0,"return":[0,2,7,8,9,10],"super":12,"true":[0,1,2,3,6,7,8,9,10,12],"try":[2,6,7,8,9,10],ASE:[4,6,11,12,13],And:[3,5,6,10],But:[7,8],CBS:0,For:[0,5,7,8],R_s:0,The:[0,1,2,3,5,8,9,10,12],There:7,These:[3,8,10],Use:[0,4,11,13],Using:[4,8,11,13],__file__:[2,6,7,8,9,10],__future__:[1,3],abc:0,abl:[7,9,12],about:0,abov:0,absolut:0,access:0,accord:0,account:0,accur:12,accuraci:0,activ:0,actual:[2,8],adam:[0,2,8,9,10],adamw:[0,8,9],adamw_schedul:[8,9],add:[2,8,10],add_scalar:[2,8,9,10],added:0,adding:[0,8],aev:[0,4,6,8,9,10,11,13],aev_cach:0,aev_comput:[0,6,8,9,10],aev_length:0,aevcacheload:[0,2],aevcomput:[0,6,8,9,10,13],after:[0,14],again:[2,7],algorithm:[0,1],all:[0,4,8,10],all_speci:0,allow:[5,7,8],along:0,alpha:[2,6,8,9,10],alreadi:[0,2],also:[0,2,5,6,7,8,9,10,13,14],altern:[6,7],alwai:[0,1,3],amount:0,amsgrad:0,amu:12,analysi:12,analyt:[0,4,11,13],ani1:[2,7,8,10],ani1ccx:[0,1,3,5],ani1x:[0,12],ani:[0,2,3,5,6,7,8,9,10,13],ani_gdb_s01:[2,7,8,10],animodel:[0,2,6,8,9,10,13],anymor:0,anywher:0,api:[0,13],appear:0,append:[8,9],appli:[0,8,9],applic:3,appropri:0,arg:7,argument:[0,8],ase:[0,1,6,12],ase_interfac:[1,11],associ:0,assum:[2,7,8,10,14],atom:[0,1,2,3,6,8,9,10,12],atomic_properti:[0,9],attach:[1,2,10],autograd:[3,6,9,12],automat:[0,1,8],averag:[0,3],avoid:[0,7,8],back:0,background:0,backward:[8,9],bar:[0,2,10],batch:[0,2,3,8,9,10],batch_i:[8,9],batch_loss:[8,9],batch_siz:[0,2,8,9,10],batch_x:[8,9],batchedanidataset:[0,2],becaus:[2,7],been:[0,2],befor:[0,7,8],begin:[0,1,3,5,6,7,8,10],behavior:1,being:9,below:[0,5],benefici:2,besid:[0,5,8,9],best:[8,9],best_model_checkpoint:[8,9],best_validation_rms:[8,9],beta:0,better:[8,9],between:[0,8],beyond:0,bfg:[1,12],bia:[2,6,8,9,10],bias:[8,9],bit:9,bool:0,boost:[4,11,13],both:[4,7,11,13],boundari:0,box:0,bparam:0,build:0,built:[3,5],builtin:[1,3,5],builtinmodel:0,c_network:[8,9],cach:[0,4,11,13],cache_aev:[0,2,11],cacheddataset:0,calcul:[0,1,6,8,12],calculator1:6,calculator2:6,call:0,callabl:0,callback:1,caller:0,can:[0,3,6,7,8,9,10,12,13,14],captur:7,care:0,cat:[8,9],caus:14,ccsd:0,cell:[0,1],celu:[2,6,8,9,10],central:0,certain:8,cfg_path:7,chang:[0,2],check:[2,10],checkpoint:[0,2,8,9,10],checkpoint_nam:0,chemic:[0,8],chemicalsymbolstoint:[0,8,9],chhhh:[0,3,5,6],chosen:0,chunk1:0,chunk2:0,chunk:[0,8,9,10],chunk_coordin:[8,9],chunk_energi:[8,9],chunk_forc:9,chunk_force_loss:9,chunk_num_atom:9,chunk_speci:[8,9],chunk_threshold:0,chunk_true_forc:9,click:[1,2,3,5,6,7,8,9,10,12],cmd:7,code:[1,2,3,4,5,6,7,8,9,10,12],coeffici:[0,1],collect:0,come:8,command:[7,14],comment:9,common:8,commonli:0,compil:5,compiled_model0:5,compiled_model:5,comput:[0,2,4,6,8,9,10,13],concat:8,concaten:0,conda:14,condit:0,config:[7,8],configur:[0,8],conform:0,confus:8,const_fil:[2,6,10],constant:[0,4,6,8,10,11,13],construct:[2,4,8,11,12,13],consum:0,contain:[0,2,3,5,8,9,10,13],contrib:[2,10],contribut:9,control:9,converg:0,convert:[0,1,8,9],coordin:[0,3,5,6,8,9,12,13],copi:2,correct:[0,14],correspond:[0,8],cos:12,could:[0,8,9],count:[0,8,9],cpu:[0,2,3,7,8,9,10],creat:[0,1,5,6,8,9,10,13],create_aev_cach:0,create_graph:9,create_supervised_evalu:[2,10],create_supervised_train:[2,10],crystal:1,cu100:14,cubic:1,cuda10:14,cuda:[0,2,7,8,9,10],current:[0,8,9],dafault:0,dat:[2,6,8],data:[0,2,8,9,10,13],dataload:0,dataset:[2,7,8,9,10,13],deal:[10,13],decai:[0,8,9],decod:7,decoupl:[0,8],deep:8,def:[1,2,7,8,9,10],default_tim:[2,10],defin:[0,2,3,6,8,9,10],degre:12,demo:[7,8,10],denomin:0,depend:[5,14],deploi:[4,11,13],deprec:0,deriv:[3,6],desc:[8,9],descent:[8,9],describ:0,design:0,detach:6,devic:[0,2,3,7,8,9,10,12],device_str:7,diamond:1,dict:[0,9],dictionari:[0,8],dictloss:0,dictmetr:0,differ:[0,3,8,9],diffrent:[3,5],dim:[8,9],dipol:0,dir:2,dir_:0,direct:0,directli:[0,2,3,6,7,10,12],directori:[0,2,7,8,10],dirnam:[2,6,7,8,9,10],disabl:0,discard:0,disk:[0,4,11,13],disk_cach:0,distinguish:0,distribut:[8,9],divid:0,doc:9,docstr:0,document:7,doe:[2,8,10],don:[0,2],doubl:12,download:[1,2,3,4,5,6,7,8,9,10,12,14],dplno:0,dspath:[8,9,10],dtype:[0,1,8,9,12],due:9,dump:0,dure:[0,2,8,9],dyn:1,dynam:1,e402:7,e501:[2,6,7,10],each:[0,8,12],eager:5,early_stopping_learning_r:[8,9],easi:[5,7],effect:0,effici:2,either:[0,6],ekin:1,elaps:[2,10],element:0,element_mass:12,els:[2,7,8,9,10],enabl:0,encod:0,encoded_aev:0,encoded_speci:0,energi:[0,1,2,4,5,6,8,10,11,12,13],energies_ensembl:5,energies_ensemble_jit:5,energies_singl:5,energies_single_jit:5,energy_forc:[3,11],energy_loss:9,energy_shift:[0,6,8,9,10],energyshift:[0,6,8,9,10,13],engin:[2,10],enough:0,ensembl:[0,3,5,6],entri:0,enumer:[8,9],epoch:[0,2,7,8,9,10],epoch_start:[2,10],epot:1,eps:0,equat:0,equival:7,error:[0,1,8,9],especi:0,eta:0,etaa:[0,8,9],etar:[0,8,9],etc:[8,13],etot:1,evalu:[0,2,10],event:[2,10],everi:[0,2,10],everyth:[0,7,9],everytim:[0,2],exampl:[0,1,2,3,5,6,7,8,9,10,11,12,13],examples_jupyt:4,examples_python:4,except:[2,6,7,8,9,10],exclud:0,exclus:0,execut:11,exist:[2,10],explain:0,extend:8,extract:[0,12],factor:[0,8,9],factori:0,fals:0,fast:[0,8],file:[0,2,4,8,9,10,11,13],file_path:0,filenam:0,fill:0,find:0,find_threshold:0,finish:7,first:[0,1,3,5,6,7,8,10,12],fit:0,fit_intercept:0,fix:0,float32:[0,1],float64:[0,1,8,9,12],fmax:[1,12],follow:[0,1,7,10,14],forc:[0,4,6,8,11,13],force_coeffici:9,force_loss:9,form:0,format:[0,8,9,13],forward:0,found:8,fraction:0,freedom:12,freq:12,frequenc:[4,11,13],friction:1,from:[0,1,2,3,4,5,8,9,10,11,12,13],from_numpi:12,full:[1,2,3,5,6,7,8,9,10,12],funcit:[2,10],further:[0,8],futur:8,galleri:[1,2,3,4,5,6,7,8,9,10,12],gaussian:0,gener:[1,2,3,4,5,6,7,8,9,10,12],get:[0,7,8,9,13],get_chemical_symbol:12,get_forc:6,get_kinetic_energi:1,get_posit:12,get_potential_energi:[1,6],getcwd:[2,6,7,8,9,10],ghost:[0,8],github:0,give:[2,10],given:[0,8],going:0,good:[0,2],gpu:0,grad:[3,6,9],gradient:[0,8,9],graph:[0,9,12],group:[0,13],h2o:12,h_network:[8,9],hack:7,handler:[2,10],happen:8,hard:0,hartre:[6,8,9],hartree2kc:[2,8,9,10],has:[0,2,3,9,12],have:[0,3,9,10,12],hcno:[0,8,9],hdd:0,hdf5:[0,9],help:[0,7,13],helper:[8,9,13],here:[0,1,2,3,5,6,7,8,9,10,12],hessian:[0,4,11,13],heurist:0,high:0,hold:8,home:[1,7],how:[0,2,6,7,8,9,10],html:14,http:14,huge:[0,2,10],hyperparamet:[0,8,10],ident:[8,10],ignit:[2,4,8,11,13],ignor:[8,9],illustr:6,implement:[0,13],imposs:0,improv:[0,2,8,10],in_featur:[2,6,8,9,10],includ:[0,2,13],include_energi:0,inconveni:0,index:13,inf:0,inform:9,init:[8,9],init_param:[8,9],initi:[3,5,8,9],input:[0,4,8,9,11,13],input_:0,inputtrain:[7,8],insid:[4,11,13],insist:1,instal:13,instanc:0,instanti:0,instead:[1,2,10,14],instruct:14,integ:0,intercept:0,interest:[1,12],interfac:[4,6,11,12,13],interpret:0,interv:1,invok:[0,7],ipt:[7,8],ipynb:[1,2,3,5,6,7,8,9,10,12],is_avail:[2,7,8,9,10],is_bett:[8,9],isfil:[2,8,9,10],isinst:[8,9],issu:[0,3,14],item:[3,5,6,8,9],iter:[0,2,8,9,10],iteration_complet:[2,10],its:[0,7],jit:[5,11],join:[2,6,7,8,9,10],jupyt:[1,2,3,4,5,6,7,8,9,10,12],just:[0,3,5,7,9],kaim:[8,9],kaiming_normal_:[8,9],kcal:[8,9],keep:0,kei:[0,9],keyword:0,kinet:1,know:12,kwarg:7,lambda:0,langevin:1,larg:1,larger:8,largest:0,last:0,last_epoch:[8,9],latest:[8,9,14],latest_checkpoint:[8,9],lattic:1,lay:8,layer:[8,9],lead:0,learn:[0,8],learning_r:[8,9],least:0,len:[1,8,9],less:12,let:[1,2,3,5,6,7,8,9,10,12],level:0,librari:0,like:[0,3,13],line:[2,7],linear:[0,2,6,8,9,10],list:[0,8,9],load:[0,2,3,5,6,8,9,10],load_ani_dataset:[0,8,9,10],load_atomic_network:0,load_data:[0,7],load_from_neurochem:[6,11],load_model:[0,6],load_model_ensembl:[0,6],load_sa:[0,6],load_state_dict:[2,8,9,10],loaded_compiled_model0:5,loaded_compiled_model:5,loader:2,log:[0,2,10],log_dir:[2,10],log_loss:[2,10],log_tim:[2,10],longer:8,loop:[8,9,10],loss:[0,2,8,9,10],loss_vs_iter:[2,10],lr_schedul:[8,9],lstsq:0,mai:14,maintain:13,make:[0,3,7,8,9],mani:1,manual:[2,3,6,7,8,9,10,12],map2centr:0,map:0,mass:[0,12],math:[0,8,9,12],matrix:12,matter:0,max:[0,2,10],max_epoch:[2,8,9,10],maxaemetr:0,maximum:8,mean:[0,8,9,12],memori:[0,10],methan:6,method:0,metric:[0,2,10],might:[0,9],min:0,minibatch:[0,8],minim:[0,4,8,11,13],minut:[1,2,3,5,6,7,8,9,10,12],mistak:8,mistakenli:14,mode:[5,12],model0:[0,6],model1:6,model2:6,model3:6,model4:6,model5:6,model6:6,model7:6,model:[1,2,4,8,9,10,11,12,13],model_checkpoint:[2,10],model_dir:6,model_prefix:6,modifi:[1,9],modul:[0,1,3,5,6,7,8,9,10,13],module_list:[2,6,8,9,10],moduledict:0,modulelist:[2,6,8,9,10],modules_list:6,mol:[8,9],molecul:[0,3,5,6,8,12,13],molecular:[0,13],more:[9,13],moreov:8,most:[0,2,9],mostli:9,mse:[0,8,9],mse_sum:[8,9],mseloss:[0,2,8,9,10],much:[8,9],multipl:0,must:[0,9],my_tqdm:7,n_network:[8,9],name:[0,2,8,10,14],nameerror:[2,6,7,8,9,10],necessari:10,necessarili:10,need:[0,2,3,7,8,9,10,12,14],network:[0,2,4,5,6,11,13],neural:[0,2,4,6,11,13],neurochem:[3,4,8,10,11,13],neurochem_train:[7,11],never:[0,2],nightli:14,nnf:0,nnp1:6,nnp2:6,nnp_train:[8,11],nnp_training_forc:[9,11],nnp_training_ignit:[10,11],none:[0,8,9,10],noqa:[2,6,7,10],normal:[8,9],note:[0,7,8],notebook:[1,2,3,4,5,6,7,8,9,10,12],now:[1,3,5,6,7,8,9,10,12],num_atom:[8,9],num_speci:[0,8,9],num_work:0,number:[0,3,8],numer:[0,12],numpi:[6,14],o_network:[8,9],object:[0,2,6,8],obtain:0,offici:[1,14],omit:9,onc:[0,7],one:[0,2,12],onli:[0,8,9,12],oper:0,opt:[1,12],optim:[0,1,2,8,9,10,12],optimiz:5,optimizat:13,option:0,order:[0,7,12],org:14,origin:[0,5],other:0,other_properti:0,otherwis:0,our:[2,7,8,9],out:[1,2,3,5,6,7,8,9,10,12],out_featur:[2,6,8,9,10],outlier:0,outperform:3,output:[0,2,5,7,8,9,10,12],outsid:0,overcom:0,overfit:[2,10],overwrit:0,own:[2,4,9,11,13],packag:14,pad:[0,8,9],pad_atomic_properti:0,padded_shap:0,padded_tensor:0,paddedbatchchunkdataset:0,padding_fil:0,padding_valu:0,page:[1,13],pair:[0,8,9],paper:0,param:[0,2,6,8,9,10],param_group:[8,9],paramet:[0,2,9,10],part:[0,2,9],particip:0,pass:0,path:[0,2,6,7,8,9,10],patienc:[8,9],pbar:[2,10],pbc:[0,1],per:[1,10],per_atom:0,peratomdictloss:0,percentag:0,period:0,physic:1,pip:14,pipe:7,pipelin:[0,2,6,8,9,10,13],pleas:[9,14],point:0,popen:7,posit:[0,6,12],possibl:5,potenti:[0,1,2,4,11,13],power:12,pre:14,preced:3,precomput:0,predict:[0,3],predicted_energi:[8,9],prefix:0,prepar:0,present:0,present_speci:0,preview:14,previou:[2,10],previous:[8,9],print:[1,2,3,5,6,7,8,9,10,12],print_funct:[1,3],printenergi:1,process:[0,3,5,8,9],produc:5,program:[0,7],programmat:8,progress:[0,2,10],progress_bar:0,progressbar:[2,7,10],properti:[0,8,9],proport:0,propos:0,provid:[8,10,12],purpos:[5,7],put:0,pyanitool:0,python:[0,1,2,3,4,5,6,7,8,9,10,12],pytorch:[4,5,8,9,11,13,14],quantiti:1,quick:7,quickli:9,r_c:0,rang:[2,8,9,10],rate:[0,8],rather:0,raw:6,rca:[0,8,9],rcr:[0,8,9],read:[6,7,8,9,10],reader:10,readi:[10,12],real:9,realpath:[2,6,7,8,9,10],reason:[1,8],recogn:14,recommend:3,redirect:7,reduc:0,reducelronplateau:[8,9],reduct:[8,9],redund:0,refer:[0,9],regardless:1,regular:[0,8],rememb:9,repeat:8,replac:0,repositori:[7,8],requir:[0,8,9,14],requires_grad:[3,6],requires_grad_:[9,12],reson:0,resourc:[2,6,10],rest:[0,2],restart:8,result:[0,3,5],resum:[8,9],retain:9,retain_graph:9,rhcno:[2,6,8,10],rm_outlier:[0,8,9,10],rmse:[0,2,8,9,10],rmsemetr:[0,2,10],roitberg:13,round:[1,2,10],run:[0,1,2,3,5,6,7,8,9,10,12],runner:7,sae:0,sae_fil:[2,6],sae_from_dataset:0,sae_linfit:[2,6,8],same:[0,2,5,6,8,9,10,12],sampl:9,save:[2,5,8,9,10],scale:0,schedul:8,scratch:0,script:[1,2,3,5,6,7,8,9,10,12],search:13,second:[0,1,2,3,5,6,7,8,9,10,12],see:[0,2,3,5,7,8,9,10,14],seen:[9,10],self:[0,6,8,9],self_energi:[0,8,9],sequenc:0,sequenti:[0,2,6,8,9,10],serial:[4,11,13],serializ:5,seriou:[7,8],set:[0,1,2,7,8,9,10],set_calcul:[1,6],setup:[7,8,10],sgd:[8,9],sgd_schedul:[8,9],shape:[0,3,8,9,12],share:0,shfa:[0,8,9],shfr:[0,8,9],shfz:[0,8,9],shift:0,shifter:[0,2,6],ship:3,should:[0,7,8,9,12],shouldn:0,show:[0,2,7,8,9,10],shuffl:[0,8],shuffleddataset:0,similar:[0,8],similarli:[8,9],simplic:9,simplifi:[7,10],sin:12,sinc:[0,2,10,12],singl:[0,3,5,6,8],site:14,size:[0,2,8,10,12],skip:2,slow:12,small:[7,8],smaller:8,solut:0,solv:0,some:[0,7,10],sort:0,sourc:[0,1,2,3,4,5,6,7,8,9,10,12],space:12,speci:[0,3,5,6,8,9,12],species_coordin:[0,8,9],species_energi:0,species_ord:0,species_tensor_convert:0,species_to_tensor:[0,3,5,6,8,9,10,12],species_x:0,specifi:[0,3,8,9,10,12],speed:3,sphinx:[1,2,3,4,5,6,7,8,9,10,12],split:[0,8,9,10],sqrt:[8,9],squar:0,squeez:[3,6],ssd:[0,2],stabil:0,start:[2,8,9,10,13],state:[2,8,10],state_dict:[2,8,9,10],stderr:7,stdout:7,step:[1,2,8,9,10,12],stochast:[8,9],stop:8,storag:0,store:[0,8,9],str:0,string:[0,8],strip:0,strip_redundant_pad:0,structur:[0,3,4,8,11,12,13],subclass:0,subprocess:7,subset:0,subtract:[0,8],subtract_from_dataset:[0,8,9,10],subtract_self_energi:0,successfulli:[7,8],suffix:0,sum:[0,3,6,8,9],summarywrit:[2,8,9,10],support:[0,3,5,8],symbol:[0,1,8],sys:7,system:[7,8],take:[0,9],taken:0,target:0,temperatur:[4,11,13],tensor:[0,3,5,6,8,9,12],tensorboard:[0,2,7,8,9,10],tensorboardx:2,term:0,termin:8,test:[0,5,7],test_data:7,than:[0,8,9],thank:12,thei:[5,8],them:[0,8,10],theori:0,therefor:12,theta_:0,thi:[0,1,2,3,6,7,8,9,10],thing:6,third:0,those:0,three:0,threshold:[0,8,9],threshold_max:0,threshould:0,through:[9,14],time:[0,1,2,3,5,6,7,8,9,10,12],time_vs_epoch:[2,10],timeit:[2,10],togeth:0,too:1,tool:[0,8,10,13],torch:[0,1,2,3,5,6,7,8,9,10,12,14],torch_nightli:14,torchani:[1,2,3,5,6,7,8,9,10,12,14],torchscript:[4,11,13],torchvis:14,total:[0,1,2,3,5,6,7,8,9,10,11,12],total_ms:[8,9],tqdm:[0,7,8,9],trail:0,train0:6,train:[0,3,4,5,6,11,13],trainer:[0,2,7,10],training_cach:2,training_path:[0,2,7],training_rmse_everi:[2,10],training_rmse_vs_epoch:[2,10],trane:0,transfer:0,transfom:0,transform:[0,8,9,10],transformedloss:0,true_energi:[8,9],tupl:0,tutori:[6,8,9,10],two:[0,9],type:[0,8,9,10],unchang:0,under:[7,8],uniform:[8,9],uniqu:0,unit:[0,1,6,8,9,12],unless:3,unsqueez:[3,5,6,12],until:8,up_to_gdb4:[2,7,8,10],updat:[8,14],usag:[7,8],use:[0,1,2,3,5,6,7,8,9,10,12],used:[0,3,10],user:[5,7,8],uses:8,using:[0,3,4,5,6,7,11,13],usual:[0,2,10],utf:7,util:[2,8,9,10,12,13],valid:[0,2,7,8,9,10],validaiton:0,validation_and_checkpoint:[2,10],validation_cach:2,validation_path:[0,2,7],validation_rms:[8,9],validation_rmse_vs_epoch:[2,10],validation_split:0,valu:[0,8],variant:0,variou:13,vector:0,veri:[0,2,5,7,8],version:14,vibrat:[0,4,11,13],vibration_analysi:[11,12],vibrational_analysi:[0,12],visual:[8,9],wai:[5,8],want:[0,1,3,12],wast:[0,8],water:12,wavenumb:0,wb97x:0,weight:[0,8,9],weight_decai:[0,8,9],were:[8,9],what:7,when:[0,1,2,7,8,9,10,14],where:[0,3,5,8,9,12],whether:0,which:[0,8,12,14],whl:14,whole:[0,6,8],wide:8,work:[0,7,8,10,13],worri:8,would:[0,2,8,9,14],wparam:0,wrap:0,write:[8,9,10],writer:[2,10],wrong:7,yield:0,you:[0,1,3,6,7,8,14],your:[1,2,3,4,7,9,11,13,14],zero:[8,9],zero_grad:[8,9],zeros_:[8,9],zeta:[0,8,9],zip:4,zoo:[4,5,11,13]},titles:["TorchANI","Structure minimization and constant temperature MD using ASE interface","Use Disk Cache of AEV to Boost Training","Computing Energy and Force Using Models Inside Model Zoo","Examples","Using TorchScript to serialize and deploy model","Construct Model From NeuroChem Files","Train Neural Network Potential From NeuroChem Input File","Train Your Own Neural Network Potential","Train Neural Network Potential To Both Energies and Forces","Train Your Own Neural Network Potential, Using PyTorch-Ignite","Computation times","Computing Vibrational Frequencies Using Analytical Hessian","Welcome to TorchANI\u2019s documentation!","Installation"],titleterms:{ASE:[0,1],Use:2,Using:[3,5,10,12],aev:2,analyt:12,boost:2,both:9,cach:2,comput:[3,11,12],constant:1,construct:6,dataset:0,deploi:5,disk:2,document:13,energi:[3,9],exampl:4,file:[6,7],forc:[3,9],frequenc:12,from:[6,7],helper:0,hessian:12,ignit:[0,10],indic:13,input:7,insid:3,instal:14,interfac:[0,1],minim:1,model:[0,3,5,6],network:[7,8,9,10],neural:[7,8,9,10],neurochem:[0,6,7],optimizat:0,own:[8,10],potenti:[7,8,9,10],pytorch:10,serial:5,structur:1,tabl:13,temperatur:1,time:11,torchani:[0,13],torchscript:5,train:[2,7,8,9,10],using:1,util:0,vibrat:12,welcom:13,your:[8,10],zoo:[0,3]}})